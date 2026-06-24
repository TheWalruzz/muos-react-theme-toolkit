import { CSSProperties, ReactNode } from "react";
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

export type Language = keyof typeof supportedLanguageNameMap;

export type TranslationResources = Partial<{
  [key in keyof typeof supportedLanguageNameMap]: ResourceLanguage;
}>;

export interface Resolution {
  width: number;
  height: number;
}

export interface Styles extends CSSProperties {
  [key: `--${string}`]: string;
}

export interface ScreenConfig {
  /** Path for the screen destination */
  path: string;
  /** Override the rendered resolution for that screen. Useful for creating previews, grid icons etc. */
  overrideResolution?: (originalResolution: Resolution) => Resolution;
  /** Static prefix for the destination path */
  pathPrefix?: string;
  /** Function that returns the component to render for the screen. */
  render: (resolution: Resolution) => ReactNode;
  /** @deprecated Should this screen be included in internal assets.muxzip? */
  includeInAssetsPackage?: boolean;
  /** Should this screen not be rendered for localized assets? */
  ignoreInLocalized?: boolean;
  /** Should this screen be re-rendered for each resolution */
  ignoreOtherResolutions?: boolean;
}

export type Scheme = (resolution: Resolution, styles?: Styles) => string;

export interface SchemeConfig {
  path: string;
  scheme: Scheme;
}

export interface AssetConfig {
  path: string;
  data: string;
  type: "text" | "dataUrl";
}

export interface ThemeConfig {
  /** Name of the theme. */
  name: string;
  /** Author of the theme. */
  author: string;
  /** Version of muOS. E.g. `2508.3` */
  osVersion?: string;
  /** File extension of the output zip file. Default: `muxthm`. Only change if you know what you're doing. */
  outputType?: "muxthm" | "muxzip" | "zip";
  /** Screens to be rendered. */
  screens: ScreenConfig[];
  /** Generators of scheme files. */
  schemes: SchemeConfig[];
  /** Generators of scheme files. */
  altSchemes?: Record<string, SchemeConfig[]>;
  /** Assets to add for each alternate theme. */
  altAssets?: Record<string, AssetConfig[]>;
  /** Styles and variables to inject into each screen's DOM. */
  styles?: Styles;
  /** Static assets to include in the package. */
  assets?: AssetConfig[];
  /** Languages for which to create additional, localized screens. */
  languages: Language[];
  /** The default language. Most likely always should be: `en`. */
  fallbackLanguage: Language;
  /** Whether to skip adding `credits.txt` file in the package. */
  skipCredits?: boolean;
}
