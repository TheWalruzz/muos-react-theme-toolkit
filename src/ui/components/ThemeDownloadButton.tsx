import { useMemo } from "react";
import { themes } from "@/config";
import { useDownloadTheme } from "../hooks/useDownloadTheme";

import styles from "./ThemeDownloadButton.module.css";

export function ThemeDownloadButton() {
  const { isProcessing, downloadTheme, progress, totalProgress } =
    useDownloadTheme();

  const progressDisplay = useMemo(
    () => Math.floor((progress / totalProgress) * 100),
    [progress, totalProgress]
  );

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
        {isProcessing ? `Processing... (${progressDisplay}%)` : "Download"}
      </button>
    </div>
  );
}
