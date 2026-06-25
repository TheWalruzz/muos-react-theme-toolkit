import { useThemes } from "@/ui/context/ThemesContext";
import { ResolutionContext } from "@/ui/context/ResolutionContext";
import { resolutions } from "@/resolutions";
import { I18nextProvider } from "react-i18next";
import { ScreenView } from "./ScreenView";
import { useCallback, useState } from "react";
import classNames from "classnames";
import { Language, supportedLanguageNameMap } from "@/types";
import { useTranslationResources } from "../context/TranslationResourcesContext";

import styles from "./LanguageDisplay.module.css";

interface Props {
  language: Language;
  initialOpen: boolean;
}

export function LanguageDisplay({ language, initialOpen }: Props) {
  const { currentTheme } = useThemes();
  const [isOpen, setIsOpen] = useState(initialOpen);
  const { instances } = useTranslationResources();

  const toggle = useCallback(() => setIsOpen((open) => !open), []);

  return (
    <div className={styles.LanguageDisplay}>
      <h1 onClick={toggle}>
        {isOpen ? "▲" : "▼"} {supportedLanguageNameMap[language]}
      </h1>

      <div
        className={classNames(styles.LanguageDisplay_content, {
          [styles.open]: isOpen,
        })}
      >
        <I18nextProvider i18n={instances[language]} defaultNS="translation">
          {resolutions.map((resolution) => (
            <div
              key={`${currentTheme.name}-${language}-${resolution.width}x${resolution.height}`}
              className={styles.LanguageDisplay_list}
            >
              <h2>
                {resolution.width}x{resolution.height}
              </h2>
              {currentTheme.screens
                .filter(
                  (screen) =>
                    ((!screen.includeInAssetsPackage &&
                      !screen.ignoreInLocalized) ||
                      language === currentTheme.fallbackLanguage) &&
                    (!screen.ignoreOtherResolutions ||
                      resolution === resolutions[0]),
                )
                .map((screen, index) => (
                  <ResolutionContext.Provider
                    key={`${currentTheme.name}-${language}-${resolution.width}x${resolution.height}-screen-${screen.path}-${index}`}
                    value={
                      screen.overrideResolution?.(resolution) ?? resolution
                    }
                  >
                    <ScreenView resolutionGroup={resolution} config={screen} />
                  </ResolutionContext.Provider>
                ))}
            </div>
          ))}
        </I18nextProvider>
      </div>
    </div>
  );
}
