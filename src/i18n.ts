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
        return console.log(err);
      }
    }
  );

export const availableLanguages = Object.keys(resources) as Language[];

export const i18nInstances = availableLanguages.reduce((acc, language) => {
  acc[language] = getI18nInstance(language);
  return acc;
}, {} as Record<Language, i18n>);

export const languageMap = {
  ca: "Catalan",
  zh_Hans: "Chinese (Simplified)",
  zh_Hant: "Chinese (Traditional)",
  hr: "Croatian",
  cs: "Czech",
  nl: "Dutch",
  en_US: "English (American)",
  en: "English",
  fr: "French",
  de: "German",
  he: "Hebrew",
  hi: "Hindi",
  ga: "Irish",
  it: "Italian",
  ja: "Japanese",
  ko: "Korean",
  fa: "Persian",
  pl: "Polish",
  pt_BR: "Portuguese (BR)",
  pt_PT: "Portuguese (PT)",
  ru: "Russian",
  sr: "Serbian",
  es: "Spanish",
  sv: "Swedish",
  tr: "Turkish",
  uk: "Ukrainian",
  vi: "Vietnamese",
};
