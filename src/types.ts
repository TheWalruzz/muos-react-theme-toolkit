import { CSSProperties, ReactNode } from "react";
import { Language } from "./i18n";

export interface Resolution {
  width: number;
  height: number;
}

export interface Styles extends CSSProperties {
  [key: `--${string}`]: string;
}

export interface ScreenConfig {
  path: string;
  overrideResolution?: (originalResolution: Resolution) => Resolution;
  pathPrefix?: string;
  render: () => ReactNode;
  includeInAssets?: boolean;
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
  name: string;
  author: string;
  osVersion?: string;
  outputType?: "muxthm" | "muxzip" | "zip";
  screens: ScreenConfig[];
  schemes: SchemeConfig[];
  styles?: Styles;
  assets?: AssetConfig[];
  languages: Language[];
  fallbackLanguage: Language;
  skipCredits?: boolean;
}
