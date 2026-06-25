import { ThemeToolkitApp, type ThemeConfig } from "@mustardos-react-ttk/core";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeToolkitApp themes={themes} translations={translations} />
  </StrictMode>,
);
