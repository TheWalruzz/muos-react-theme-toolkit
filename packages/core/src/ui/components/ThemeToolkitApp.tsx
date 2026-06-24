import { RefProvider } from "react-context-refs";
import { ThemeDisplay } from "./ThemeDisplay";
import { ToolBar } from "./ToolBar";
import { CurrentThemeContextProvider } from "./CurrentThemeContextProvider";
import { ThemeConfig, TranslationResources } from "@/types";
import { TranslationResourcesContextProvider } from "./TranslationResourcesContextProvider";

export interface ThemeToolkitAppProps {
  themes: ThemeConfig[];
  translations?: TranslationResources;
}

export function ThemeToolkitApp({
  themes,
  translations = {},
}: ThemeToolkitAppProps) {
  return (
    <RefProvider>
      <TranslationResourcesContextProvider translations={translations}>
        <CurrentThemeContextProvider themes={themes}>
          <ToolBar />
          <ThemeDisplay />
        </CurrentThemeContextProvider>
      </TranslationResourcesContextProvider>
    </RefProvider>
  );
}
