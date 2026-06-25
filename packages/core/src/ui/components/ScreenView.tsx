import { CSSProperties } from "react";
import { useResolution } from "@/utils/useResolution";
import { useContextRef } from "react-context-refs";
import { Resolution, ScreenConfig } from "@/types";
import { useTranslation } from "react-i18next";
import { useThemes } from "@/ui/context/ThemesContext";

import styles from "./ScreenView.module.css";

interface Props {
  resolutionGroup: Resolution;
  config: ScreenConfig;
}

export function ScreenView({ config, resolutionGroup }: Props) {
  const { path, render, pathPrefix } = config;
  const { i18n } = useTranslation();
  const { currentTheme } = useThemes();
  const { width, height } = useResolution();
  const setRef = useContextRef({
    language: i18n.language,
    width: resolutionGroup.width,
    height: resolutionGroup.height,
    ...config,
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
            "--resolution-width": `${resolutionGroup.width}px`,
            "--resolution-height": `${resolutionGroup.height}px`,
            "--is-square":
              resolutionGroup.width === resolutionGroup.height ? 1 : 0,
            ...(currentTheme?.styles ?? {}),
          } as CSSProperties
        }
      >
        {render(resolutionGroup)}
      </div>
    </div>
  );
}
