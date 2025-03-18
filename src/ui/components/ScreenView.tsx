import { CSSProperties } from "react";
import { useResolution } from "@/utils/useResolution";
import { useContextRef } from "react-context-refs";
import { Resolution, ScreenConfig } from "@/types";
import { useTranslation } from "react-i18next";
import { useCurrentTheme } from "@/ui/context/CurrentThemeContext";

import styles from "./ScreenView.module.css";

interface Props extends ScreenConfig {
  resolutionGroup: Resolution;
}

export function ScreenView({
  path,
  render,
  pathPrefix,
  includeInAssets,
  resolutionGroup,
}: Props) {
  const { i18n } = useTranslation();
  const { currentTheme } = useCurrentTheme();
  const { width, height } = useResolution();
  const setRef = useContextRef({
    path,
    language: i18n.language,
    width: resolutionGroup.width,
    height: resolutionGroup.height,
    includeInAssets: !!includeInAssets,
    pathPrefix,
  });

  return (
    <div className={styles.ScreenView}>
      <div className={styles.ScreenView_path}>
        {pathPrefix}
        {path}
      </div>
      <div
        ref={setRef}
        style={
          {
            width,
            height,
            maxWidth: width,
            maxHeight: height,
            overflow: "hidden",
            "--width": `${width}px`,
            "--height": `${height}px`,
            ...(currentTheme?.styles ?? {}),
          } as CSSProperties
        }
      >
        {render()}
      </div>
    </div>
  );
}
