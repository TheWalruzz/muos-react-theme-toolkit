import { useDownloadTheme } from "../hooks/useDownloadTheme";

import styles from "./ImageDownloadButton.module.css";

export function ImageDownloadButton() {
  const { isProcessing, downloadTheme } = useDownloadTheme();

  return (
    <div className={styles.ImageDownloadButton}>
      {isProcessing && (
        <div className={styles.ImageDownloadButton_inProgress}>
          Preparing ZIP file, please wait...
        </div>
      )}
      <button onClick={downloadTheme} disabled={isProcessing}>
        Download
      </button>
    </div>
  );
}
