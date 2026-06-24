import { createContext, useContext } from "react";
import { Language } from "@/types";
import { type i18n } from "i18next";

interface TranslationResources {
  instances: Record<Language, i18n>;
  availableLanguages: Language[];
}

export const TranslationResourcesContext = createContext<TranslationResources>(
  null!,
);

export const useTranslationResources = () =>
  useContext(TranslationResourcesContext);
