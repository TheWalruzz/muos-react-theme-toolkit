import { useTranslation } from "react-i18next";

import "./LanguageSelector.css";

export function LanguageSelector() {
  const { i18n } = useTranslation();

  return (
    <label className="LanguageSelector">
      Language
      <div>
        <select
          id="language"
          value={i18n.language}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          {Object.keys(i18n.services.resourceStore.data).map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>
    </label>
  );
}
