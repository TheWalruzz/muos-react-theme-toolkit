import { ScreenConfig, SchemeConfig } from "./types";
import { screens as minimalRoundScreens } from "./themes/MinimalRound";
import { schemes as minimalRoundSchemes } from "./themes/MinimalRound";
import { Language } from "./i18n";

export const screens: ScreenConfig[] = minimalRoundScreens;

export const schemes: SchemeConfig[] = minimalRoundSchemes;

export const languages: Language[] = ["en", "pl"];

export const fallbackLanguage: Language = "en";
