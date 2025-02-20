import { ThemeDownloadButton } from "./ThemeDownloadButton";
import { ThemeSelector } from "./ThemeSelector";

import styles from "./ToolBar.module.css";

export const ToolBar = () => {
  return (
    <div className={styles.ToolBar}>
      <ThemeSelector />
      <ThemeDownloadButton />
    </div>
  );
};
