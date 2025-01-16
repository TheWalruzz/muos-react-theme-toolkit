import { ImageDownloadButton } from "./ImageDownloadButton";
import { ThemeSelector } from "./ThemeSelector";

import styles from "./ToolBar.module.css";

export const ToolBar = () => {
  return (
    <div className={styles.ToolBar}>
      <ThemeSelector />
      <ImageDownloadButton />
    </div>
  );
};
