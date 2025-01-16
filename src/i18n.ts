import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./locales";

i18next.use(initReactI18next).init({
  fallbackLng: "en",
  resources,
  debug: true,

  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});
