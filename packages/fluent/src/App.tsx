import { ThemeToolkitApp, type ThemeConfig } from "@mustardos-react-ttk/core";
import {
  fluentBlue,
  fluentDark,
  fluentLight,
  fluentMustard,
  fluentPurple,
} from "./config";
import { translations } from "./locales";
import "@mustardos-react-ttk/core/styles.css";

const themes: ThemeConfig[] = [
  fluentLight,
  fluentDark,
  fluentPurple,
  fluentBlue,
  fluentMustard,
];

export function App() {
  return <ThemeToolkitApp themes={themes} translations={translations} />;
}
