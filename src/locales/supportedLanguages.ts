import { ResourceLanguage } from "i18next";

export const supportedLanguageNameMap = {
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

export type SupportedTranslations = Partial<{
  [key in keyof typeof supportedLanguageNameMap]: ResourceLanguage;
}>;
