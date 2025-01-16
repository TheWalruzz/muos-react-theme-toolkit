import { ResolutionContext } from "@/context/ResolutionContext";
import { ScreenView } from "./ScreenView";
import { resolutions } from "@/resolutions";
import { languages, screens } from "@/config";
import { I18nextProvider } from "react-i18next";
import { availableLanguages, i18nInstances, languageMap } from "@/i18n";

import "./ThemeDisplay.css";

export function ThemeDisplay() {
  return (
    <div className="ThemeDisplay">
      {languages
        .filter((language) => availableLanguages.includes(language))
        .map((language) => (
          <div key={language}>
            <h1>{languageMap[language]}</h1>

            <div className="ThemeDisplay_language">
              <I18nextProvider
                i18n={i18nInstances[language]}
                defaultNS="translation"
              >
                {resolutions.map((resolution) => (
                  <div
                    key={`${resolution.width}x${resolution.height}`}
                    className="ThemeDisplay_list"
                  >
                    <h2>
                      {resolution.width}x{resolution.height}
                    </h2>
                    {screens.map((screen, index) => (
                      <ResolutionContext.Provider
                        key={`${resolution.width}x${resolution.height}-screen-${screen.path}-${index}`}
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
