import { ResolutionContext } from "@/context/ResolutionContext";
import { ScreenView } from "./ScreenView";
import { resolutions } from "@/resolutions";
import { I18nextProvider } from "react-i18next";
import { availableLanguages, i18nInstances, languageMap } from "@/i18n";
import { useCurrentTheme } from "@/context/CurrentThemeContext";

import styles from "./ThemeDisplay.module.css";

export function ThemeDisplay() {
  const { currentTheme } = useCurrentTheme();

  return (
    <div className={styles.ThemeDisplay}>
      {currentTheme.languages
        .filter((language) => availableLanguages.includes(language))
        .map((language) => (
          <div key={`${currentTheme.name}-${language}`}>
            <h1>{languageMap[language]}</h1>

            <div className={styles.ThemeDisplay_language}>
              <I18nextProvider
                i18n={i18nInstances[language]}
                defaultNS="translation"
              >
                {resolutions.map((resolution) => (
                  <div
                    key={`${currentTheme.name}-${language}-${resolution.width}x${resolution.height}`}
                    className={styles.ThemeDisplay_list}
                  >
                    <h2>
                      {resolution.width}x{resolution.height}
                    </h2>
                    {currentTheme.screens.map((screen, index) => (
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
        ))}
    </div>
  );
}
