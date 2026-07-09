import { useCallback, useMemo, useState } from "react";
import { useThemes } from "../context/ThemesContext";
import { useRefs } from "react-context-refs";
import { resolutions } from "@/resolutions";
import {
  BlobWriter,
  ZipWriter,
  Data64URIReader,
  TextReader,
  Reader,
  BlobReader,
} from "@zip.js/zip.js";
import { toPng, toCanvas } from "html-to-image";
import { CanvasToBMP } from "../utils/canvasToBMP";
import { downloadFile } from "../utils/downloadFile";
import { PromiseQueue } from "../utils/PromiseQueue";
import { AssetConfig, Language, supportedLanguageNameMap } from "@/types";
import imageCompression from "browser-image-compression";

const defaultZipOptions = {
  bufferedWrite: true,
  level: 4,
};

const optimizePNG = async (dataUrl: string, filename: string) => {
  const file = await imageCompression.getFilefromDataUrl(dataUrl, filename);
  const optimizedFile = await imageCompression(file, {
    fileType: "image/png",
  });
  return imageCompression.getDataUrlFromFile(optimizedFile);
};

export function useDownloadTheme() {
  const refs = useRefs();
  const { currentTheme } = useThemes();
  const [isProcessing, setIsProcessing] = useState(false);
  const [totalProgress, setTotalProgress] = useState(0);
  const [progress, setProgress] = useState(0);

  const getTheme = useCallback(async () => {
    setProgress(0);
    setTotalProgress(refs.length + 1);
    setIsProcessing(true);

    const themeBlobWriter = new BlobWriter();
    const themeWriter = new ZipWriter(themeBlobWriter, defaultZipOptions);
    const assetsBlobWriter = new BlobWriter();
    const assetsWriter = new ZipWriter(assetsBlobWriter, defaultZipOptions);
    const altAssetsBlobWriters: Record<string, BlobWriter> = {};
    const altAssetsWriters: Record<string, ZipWriter<Blob>> = {};
    let hasAssetScreens = false;

    console.info("start:", new Date());

    const handleRef = async (ref: (typeof refs)[number]) => {
      if (!ref.current) {
        return;
      }

      // get DataURLs of images in specified file format
      let data: string = "";
      const fileExtension: string = ref.meta.path.split(".").pop();
      switch (fileExtension) {
        case "png":
          data = await toPng(ref.current);
          data = await optimizePNG(data, ref.meta.path);
          break;
        case "bmp": {
          const canvas = await toCanvas(ref.current, { type: "image/bmp" });
          const canvasConverter = new CanvasToBMP();
          data = canvasConverter.toDataURL(canvas);
          break;
        }
        default:
          throw new Error(`Unsupported file extension for '${ref.meta.path}'`);
      }

      // if screen is supposed to be in assets.muxzip
      if (ref.meta.includeInAssetsPackage) {
        hasAssetScreens = true;
        await assetsWriter.add(
          `${ref.meta.pathPrefix ?? ""}${ref.meta.width}x${ref.meta.height}/${
            ref.meta.path
          }`,
          new Data64URIReader(data),
        );
        setProgress((current) => current + 1);
        return;
      }

      // handle non-screen items that will just go into theme root
      if (ref.meta.ignoreOtherResolutions) {
        await themeWriter.add(
          `${ref.meta.pathPrefix ?? ""}${ref.meta.path}`,
          new Data64URIReader(data),
        );
        // add fallback images and preview to main folder
      } else if (ref.meta.language === currentTheme.fallbackLanguage) {
        await themeWriter.add(
          `${ref.meta.pathPrefix ?? ""}${ref.meta.width}x${ref.meta.height}/${
            ref.meta.path
          }`,
          new Data64URIReader(data),
        );
        // only process translated screens with paths including "image/", as preview should be added only once
      } else if (
        ref.meta.path.includes("image/") &&
        (ref.meta.language as Language) in supportedLanguageNameMap
      ) {
        // do some path substitution to get translated images into subfolders
        const newPath = ref.meta.path.replace(
          "image/",
          `image/${supportedLanguageNameMap[ref.meta.language as Language]}/`,
        );

        await themeWriter.add(
          `${ref.meta.pathPrefix ?? ""}${ref.meta.width}x${
            ref.meta.height
          }/${newPath}`,
          new Data64URIReader(data),
        );
      }
      setProgress((current) => current + 1);
    };

    // add all other assets
    const handleAsset = async (
      asset: AssetConfig,
      zipWriter: ZipWriter<Blob>,
    ) => {
      let reader: Reader<unknown>;

      switch (asset.type) {
        case "dataUrl": {
          let data = asset.data;
          if (asset.path.endsWith(".png")) {
            data = await optimizePNG(data, asset.path);
          }
          reader = new Data64URIReader(data);
          break;
        }
        case "text":
          reader = new TextReader(asset.data);
          break;
      }

      await zipWriter.add(asset.path, reader);
    };

    await Promise.all([
      // get all screens
      PromiseQueue.all(refs.map((ref) => () => handleRef(ref))),
      // create and add scheme files for every resolution
      PromiseQueue.all(
        currentTheme.schemes.flatMap((scheme) =>
          resolutions.map(
            (resolution) => () =>
              themeWriter.add(
                `${resolution.width}x${resolution.height}/${scheme.path}`,
                new TextReader(scheme.scheme(resolution, currentTheme.styles)),
              ),
          ),
        ),
      ),
      // create alternate schemes
      PromiseQueue.all(
        Object.keys(currentTheme.altSchemes ?? {}).flatMap((alternative) => {
          if (!(alternative in altAssetsBlobWriters)) {
            altAssetsBlobWriters[alternative] = new BlobWriter();
            altAssetsWriters[alternative] = new ZipWriter(
              altAssetsBlobWriters[alternative],
              defaultZipOptions,
            );
          }

          return (
            currentTheme.altSchemes?.[alternative].flatMap((scheme) =>
              resolutions.map(
                (resolution) => () =>
                  altAssetsWriters[alternative].add(
                    scheme.path.replace(
                      "scheme",
                      `${resolution.width}x${resolution.height}/scheme`,
                    ),
                    new TextReader(
                      scheme.scheme(resolution, currentTheme.styles),
                    ),
                  ),
              ),
            ) ?? []
          );
        }),
      ),
      // create alternate assets
      PromiseQueue.all(
        Object.keys(currentTheme.altAssets ?? {}).flatMap((alternative) => {
          if (!(alternative in altAssetsBlobWriters)) {
            altAssetsBlobWriters[alternative] = new BlobWriter();
            altAssetsWriters[alternative] = new ZipWriter(
              altAssetsBlobWriters[alternative],
              defaultZipOptions,
            );
          }

          return (
            currentTheme.altAssets?.[alternative].map(
              (asset) => () =>
                handleAsset(asset, altAssetsWriters[alternative]),
            ) ?? []
          );
        }),
      ),
      // get all static assets
      PromiseQueue.all(
        currentTheme.assets?.map(
          (asset) => () => handleAsset(asset, themeWriter),
        ) ?? [],
      ),
      // add credits.txt file
      (async () => {
        if (!currentTheme.skipCredits) {
          await themeWriter.add(
            "credits.txt",
            new TextReader(`Created By: ${currentTheme.author}`),
          );
        }
      })(),
      // add version.txt file
      (async () => {
        if (currentTheme.osVersion) {
          await themeWriter.add(
            "version.txt",
            new TextReader(currentTheme.osVersion),
          );
        }
      })(),
    ]);

    // handle assets.muxzip if applicable
    await assetsWriter.close();

    if (hasAssetScreens) {
      const assets = await assetsBlobWriter.getData();
      await themeWriter.add("assets.muxzip", new BlobReader(assets));
    }

    // handle alternatives
    if (Object.keys(altAssetsWriters).length > 0) {
      for (const alternative in altAssetsWriters) {
        await altAssetsWriters[alternative].close();
        const data = await altAssetsBlobWriters[alternative].getData();
        await themeWriter.add(
          `alternate/${alternative}.muxalt`,
          new BlobReader(data),
        );
      }

      await themeWriter.add(
        "active.txt",
        new TextReader(Object.keys(altAssetsWriters)[0]),
      );
    }

    await themeWriter.close();

    setProgress((current) => current + 1);

    // prepare zip file for download
    const filename = `${currentTheme.name}.${
      currentTheme.outputType ?? "muxthm"
    }`;
    const blob = await themeBlobWriter.getData();

    console.info("stop:", new Date());

    setIsProcessing(false);

    return [filename, blob] as const;
  }, [currentTheme, refs]);

  const downloadTheme = useCallback(async () => {
    const [filename, blob] = await getTheme();

    downloadFile(filename, blob);
  }, [getTheme]);

  return useMemo(
    () => ({
      isProcessing,
      getTheme,
      downloadTheme,
      progress,
      totalProgress,
    }),
    [downloadTheme, getTheme, isProcessing, progress, totalProgress],
  );
}
