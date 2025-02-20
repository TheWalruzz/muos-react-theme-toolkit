import { themes } from "@/config";
import { useDownloadTheme } from "../hooks/useDownloadTheme";

import styles from "./ThemeDownloadButton.module.css";

export function ThemeDownloadButton() {
  const { isProcessing, downloadTheme } = useDownloadTheme();

  return (
    <div className={styles.ThemeDownloadButton}>
      {isProcessing && (
        <div className={styles.ThemeDownloadButton_inProgress}>
          Preparing theme file, please wait...
        </div>
      )}
      <button
        onClick={downloadTheme}
        disabled={themes.length === 0 || isProcessing}
      >
        Download
      </button>
    </div>
  );
}
