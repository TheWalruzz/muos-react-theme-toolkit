import { availableLanguages } from "@/i18n";
import { useCurrentTheme } from "@/context/CurrentThemeContext";
import { LanguageDisplay } from "./LanguageDisplay";

import styles from "./ThemeDisplay.module.css";

export function ThemeDisplay() {
  const { currentTheme } = useCurrentTheme();

  return (
    <div className={styles.ThemeDisplay}>
      {currentTheme.languages
        .filter((language) => availableLanguages.includes(language))
        .map((language) => (
          <LanguageDisplay
            key={`${currentTheme.name}-${language}`}
            language={language}
            initialOpen={language === currentTheme.fallbackLanguage}
          />
        ))}
    </div>
  );
}
