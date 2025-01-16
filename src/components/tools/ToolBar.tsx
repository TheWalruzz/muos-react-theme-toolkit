import { ImageDownloadButton } from "./ImageDownloadButton";
import { LanguageSelector } from "./LanguageSelector";

import "./ToolBar.css";

export const ToolBar = () => {
  return (
    <div className="ToolBar">
      <LanguageSelector />
      <ImageDownloadButton />
    </div>
  );
};
