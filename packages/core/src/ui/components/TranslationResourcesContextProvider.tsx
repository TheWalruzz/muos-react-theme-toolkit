import { Language, TranslationResources } from "@/types";
import i18next, { i18n } from "i18next";
import { PropsWithChildren, useCallback, useMemo } from "react";
import { TranslationResourcesContext } from "../context/TranslationResourcesContext";

interface Props {
  translations: TranslationResources;
}

export function TranslationResourcesContextProvider({
  translations,
  children,
}: PropsWithChildren<Props>) {
  const getI18nInstance = useCallback(
    (language: Language) =>
      i18next.createInstance(
        {
          fallbackLng: "en",
          lng: language,
          resources: translations,
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
        },
        (err) => {
          if (err) {
            console.error(err);
          }
        },
      ),
    [translations],
  );

  const availableLanguages = useMemo(
    () => Object.keys(translations) as Language[],
    [translations],
  );

  const instances = useMemo(
    () =>
      availableLanguages.reduce(
        (acc, language) => {
          acc[language] = getI18nInstance(language);
          return acc;
        },
        {} as Record<Language, i18n>,
      ),
    [availableLanguages, getI18nInstance],
  );

  const value = useMemo(
    () => ({
      instances,
      availableLanguages,
    }),
    [availableLanguages, instances],
  );

  return (
    <TranslationResourcesContext.Provider value={value}>
      {children}
    </TranslationResourcesContext.Provider>
  );
}
