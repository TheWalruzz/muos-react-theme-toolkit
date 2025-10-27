import { useCallback, useMemo, useState } from "react";
import { useCurrentTheme } from "../context/CurrentThemeContext";
import { useRefs } from "react-context-refs";
import { Language } from "@/i18n";
import { supportedLanguageNameMap } from "@/locales/supportedLanguages";
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
import { AssetConfig } from "@/types";

export function useDownloadTheme() {
  const refs = useRefs();
  const { currentTheme } = useCurrentTheme();
  const [isProcessing, setIsProcessing] = useState(false);
  const [totalProgress, setTotalProgress] = useState(0);
  const [progress, setProgress] = useState(0);

  const getTheme = useCallback(async () => {
    setProgress(0);
    setTotalProgress(refs.length + 1);
    setIsProcessing(true);

    const themeBlobWriter = new BlobWriter();
    const themeWriter = new ZipWriter(themeBlobWriter);
    const assetsBlobWriter = new BlobWriter();
    const assetsWriter = new ZipWriter(assetsBlobWriter);
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
          new Data64URIReader(data)
        );
        setProgress((current) => current + 1);
        return;
      }

      // add fallback images and preview to main folder
      if (ref.meta.language === currentTheme.fallbackLanguage) {
        await themeWriter.add(
          `${ref.meta.pathPrefix ?? ""}${ref.meta.width}x${ref.meta.height}/${
            ref.meta.path
          }`,
          new Data64URIReader(data)
        );
        // only process translated screens with paths including "image/", as preview should be added only once
      } else if (
        ref.meta.path.includes("image/") &&
        (ref.meta.language as Language) in supportedLanguageNameMap
      ) {
        // do some path substitution to get translated images into subfolders
        const newPath = ref.meta.path.replace(
          "image/",
          `image/${supportedLanguageNameMap[ref.meta.language as Language]}/`
        );

        await themeWriter.add(
          `${ref.meta.pathPrefix ?? ""}${ref.meta.width}x${
            ref.meta.height
          }/${newPath}`,
          new Data64URIReader(data)
        );
      }
      setProgress((current) => current + 1);
    };

    // add all other assets
    const handleAsset = async (asset: AssetConfig) => {
      let reader: Reader<unknown>;

      switch (asset.type) {
        case "dataUrl":
          reader = new Data64URIReader(asset.data);
          break;
        case "text":
          reader = new TextReader(asset.data);
          break;
      }

      await themeWriter.add(asset.path, reader);
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
                new TextReader(scheme.scheme(resolution, currentTheme.styles))
              )
          )
        )
      ),
      // get all static assets
      PromiseQueue.all(
        currentTheme.assets?.map((asset) => () => handleAsset(asset)) ?? []
      ),
      // add credits.txt file
      (async () => {
        if (!currentTheme.skipCredits) {
          await themeWriter.add(
            "credits.txt",
            new TextReader(`Created By: ${currentTheme.author}`)
          );
        }
      })(),
      // add version.txt file
      (async () => {
        if (currentTheme.osVersion) {
          await themeWriter.add(
            "version.txt",
            new TextReader(currentTheme.osVersion)
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
    [downloadTheme, getTheme, isProcessing, progress, totalProgress]
  );
}
