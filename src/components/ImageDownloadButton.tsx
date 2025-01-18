import {
  BlobWriter,
  ZipWriter,
  Data64URIReader,
  TextReader,
} from "@zip.js/zip.js";
import { toCanvas, toPng } from "html-to-image";
import { useCallback, useState } from "react";
import { useRefs } from "react-context-refs";
import { CanvasToBMP } from "@/utils/canvasToBMP";
import { resolutions } from "@/resolutions";
import { Language } from "@/i18n";
import { useCurrentTheme } from "@/context/CurrentThemeContext";
import { supportedLanguageNameMap } from "@/locales/supportedLanguages";

import styles from "./ImageDownloadButton.module.css";

export function ImageDownloadButton() {
  const refs = useRefs();
  const { currentTheme } = useCurrentTheme();
  const [isWorking, setIsWorking] = useState(false);

  const downloadImages = useCallback(async () => {
    setIsWorking(true);

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
          `${ref.meta.width}x${ref.meta.height}/${ref.meta.path}`,
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
          `${ref.meta.width}x${ref.meta.height}/${newPath}`,
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

    // add credits.txt file
    await writer.add(
      "credits.txt",
      new TextReader(`Created By: ${currentTheme.author}`)
    );

    await writer.close();

    // prepare zip file for download
    const blob = await blobWriter.getData();

    const link = document.createElement("a");
    const url = window.URL.createObjectURL(blob);
    link.href = url;
    link.download = `${currentTheme.name}-output.zip`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    setIsWorking(false);
  }, [currentTheme, refs]);

  return (
    <div className={styles.ImageDownloadButton}>
      {isWorking && (
        <div className={styles.ImageDownloadButton_inProgress}>
          Preparing ZIP file, please wait...
        </div>
      )}
      <button onClick={downloadImages} disabled={isWorking}>
        Download
      </button>
    </div>
  );
}
