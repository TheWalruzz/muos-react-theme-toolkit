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
} from "@zip.js/zip.js";
import { toPng, toCanvas } from "html-to-image";
import { CanvasToBMP } from "../utils/canvasToBMP";

export function useDownloadTheme() {
  const refs = useRefs();
  const { currentTheme } = useCurrentTheme();
  const [isProcessing, setIsProcessing] = useState(false);

  const downloadTheme = useCallback(async () => {
    setIsProcessing(true);

    const blobWriter = new BlobWriter();
    const writer = new ZipWriter(blobWriter);

    for (const ref of refs) {
      if (!ref.current) {
        continue;
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

      // add fallback images and preview to main folder
      if (ref.meta.language === currentTheme.fallbackLanguage) {
        await writer.add(
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

        await writer.add(
          `${ref.meta.pathPrefix ?? ""}${ref.meta.width}x${
            ref.meta.height
          }/${newPath}`,
          new Data64URIReader(data)
        );
      }
    }

    // create and add scheme files for every resolution
    for (const resolution of resolutions) {
      for (const scheme of currentTheme.schemes) {
        await writer.add(
          `${resolution.width}x${resolution.height}/${scheme.path}`,
          new TextReader(scheme.scheme(resolution, currentTheme.styles))
        );
      }
    }

    // add all other assets
    if (currentTheme.assets) {
      for (const asset of currentTheme.assets) {
        let reader: Reader<unknown>;

        switch (asset.type) {
          case "dataUrl":
            reader = new Data64URIReader(asset.data);
            break;
          case "text":
            reader = new TextReader(asset.data);
            break;
        }

        await writer.add(asset.path, reader);
      }
    }

    // add credits.txt file
    if (!currentTheme.skipCredits) {
      await writer.add(
        "credits.txt",
        new TextReader(`Created By: ${currentTheme.author}`)
      );
    }

    if (currentTheme.osVersion) {
      await writer.add("version.txt", new TextReader(currentTheme.osVersion));
    }

    await writer.close();

    // prepare zip file for download
    const blob = await blobWriter.getData();

    const link = document.createElement("a");
    const url = window.URL.createObjectURL(blob);
    link.href = url;
    link.download = `${currentTheme.name}.${
      currentTheme.outputType ?? "muxthm"
    }`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    setIsProcessing(false);
  }, [currentTheme, refs]);

  return useMemo(
    () => ({
      isProcessing,
      downloadTheme,
    }),
    [downloadTheme, isProcessing]
  );
}
