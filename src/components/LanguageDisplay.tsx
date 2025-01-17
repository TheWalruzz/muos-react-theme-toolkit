import { i18nInstances, Language, languageMap } from "@/i18n";

import styles from "./LanguageDisplay.module.css";
import { useCurrentTheme } from "@/context/CurrentThemeContext";
import { ResolutionContext } from "@/context/ResolutionContext";
import { resolutions } from "@/resolutions";
import { I18nextProvider } from "react-i18next";
import { ScreenView } from "./ScreenView";
import { useCallback, useState } from "react";
import classNames from "classnames";

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
        {isOpen ? "▲" : "▼"} {languageMap[language]}
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
              {currentTheme.screens.map((screen, index) => (
                <ResolutionContext.Provider
                  key={`${currentTheme.name}-${language}-${resolution.width}x${resolution.height}-screen-${screen.path}-${index}`}
                  value={screen.overrideResolution?.(resolution) ?? resolution}
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
