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
import { fallbackLanguage, schemes } from "@/config";
import { Language, languageMap } from "@/i18n";

import "./ImageDownloadButton.css";

export function ImageDownloadButton() {
  const refs = useRefs("");
  const [isWorking, setIsWorking] = useState(false);

  const downloadImages = useCallback(async () => {
    setIsWorking(true);
    const blobWriter = new BlobWriter();
    const writer = new ZipWriter(blobWriter);

    for (const ref of refs) {
      let data: string = "";
      if (ref.meta.path.endsWith(".png")) {
        data = await toPng(ref.current);
      } else if (ref.meta.path.endsWith(".bmp")) {
        const canvas = await toCanvas(ref.current, { type: "image/bmp" });
        const canvasConverter = new CanvasToBMP();
        data = canvasConverter.toDataURL(canvas);
      }

      // add fallback images to main folder
      if (ref.meta.language === fallbackLanguage) {
        await writer.add(
          `${ref.meta.width}x${ref.meta.height}/${ref.meta.path}`,
          new Data64URIReader(data)
        );
      } else if (
        ref.meta.path.includes("image/") &&
        (ref.meta.language as Language) in languageMap
      ) {
        // do some path substitution to get translated images into subfolders
        const newPath = ref.meta.path.replace(
          "image/",
          `image/${languageMap[ref.meta.language as Language]}/`
        );

        await writer.add(
          `${ref.meta.width}x${ref.meta.height}/${newPath}`,
          new Data64URIReader(data)
        );
      }
    }

    for (const resolution of resolutions) {
      for (const scheme of schemes) {
        writer.add(
          `${resolution.width}x${resolution.height}/${scheme.path}`,
          new TextReader(scheme.scheme(resolution))
        );
      }
    }

    await writer.close();
    const blob = await blobWriter.getData();

    const link = document.createElement("a");

    const url = window.URL.createObjectURL(blob);
    link.href = url;
    link.download = "images.zip";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    setIsWorking(false);
  }, [refs]);

  return (
    <div className="ImageDownloadButton">
      {isWorking && (
        <div className="ImageDownloadButton_inProgress">
          Preparing ZIP file...
        </div>
      )}
      <button onClick={downloadImages} disabled={isWorking}>
        Download
      </button>
    </div>
  );
}
