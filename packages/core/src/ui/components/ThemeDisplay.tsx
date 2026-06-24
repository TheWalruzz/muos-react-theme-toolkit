import { useCurrentTheme } from "@/ui/context/CurrentThemeContext";
import { LanguageDisplay } from "./LanguageDisplay";
import { useTranslationResources } from "../context/TranslationResourcesContext";

import styles from "./ThemeDisplay.module.css";

export function ThemeDisplay() {
  const { currentTheme } = useCurrentTheme();
  const { availableLanguages } = useTranslationResources();

  return (
    <div className={styles.ThemeDisplay}>
      {currentTheme?.languages
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
