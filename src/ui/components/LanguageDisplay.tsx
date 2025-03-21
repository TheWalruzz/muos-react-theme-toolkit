import { i18nInstances, Language } from "@/i18n";
import { useCurrentTheme } from "@/ui/context/CurrentThemeContext";
import { ResolutionContext } from "@/ui/context/ResolutionContext";
import { resolutions } from "@/resolutions";
import { I18nextProvider } from "react-i18next";
import { ScreenView } from "./ScreenView";
import { useCallback, useState } from "react";
import classNames from "classnames";
import { supportedLanguageNameMap } from "@/locales/supportedLanguages";

import styles from "./LanguageDisplay.module.css";

interface Props {
  language: Language;
  initialOpen: boolean;
}

export function LanguageDisplay({ language, initialOpen }: Props) {
  const { currentTheme } = useCurrentTheme();
  const [isOpen, setIsOpen] = useState(initialOpen);

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
        <I18nextProvider i18n={i18nInstances[language]} defaultNS="translation">
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
                    !screen.includeInAssetsPackage ||
                    language === currentTheme.fallbackLanguage
                )
                .map((screen, index) => (
                  <ResolutionContext.Provider
                    key={`${currentTheme.name}-${language}-${resolution.width}x${resolution.height}-screen-${screen.path}-${index}`}
                    value={
                      screen.overrideResolution?.(resolution) ?? resolution
                    }
                  >
                    <ScreenView resolutionGroup={resolution} {...screen} />
                  </ResolutionContext.Provider>
                ))}
            </div>
          ))}
        </I18nextProvider>
      </div>
    </div>
  );
}
