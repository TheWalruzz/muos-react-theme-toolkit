import i18next, { i18n } from "i18next";
import { resources } from "./locales";

export type Language = keyof typeof resources;

const getI18nInstance = (language: Language) =>
  i18next.createInstance(
    {
      fallbackLng: "en",
      lng: language,
      resources,
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
    },
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );

export const availableLanguages = Object.keys(resources) as Language[];

export const i18nInstances = availableLanguages.reduce((acc, language) => {
  acc[language] = getI18nInstance(language);
  return acc;
}, {} as Record<Language, i18n>);
