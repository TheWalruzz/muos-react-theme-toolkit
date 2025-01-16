import { BlobWriter, ZipWriter, Data64URIReader } from "@zip.js/zip.js";
import { toCanvas, toPng } from "html-to-image";
import { useCallback, useState } from "react";
import { useRefs } from "react-context-refs";
import { CanvasToBMP } from "../../utils/canvasToBMP";

export function ImageDownloadButton() {
  const refs = useRefs();
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
      await writer.add(
        `${ref.meta.width}x${ref.meta.height}/${ref.meta.path}`,
        new Data64URIReader(data)
      );
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
    <div>
      <button onClick={downloadImages} disabled={isWorking}>
        Download
      </button>
      {isWorking && <div>Preparing ZIP file...</div>}
    </div>
  );
}
