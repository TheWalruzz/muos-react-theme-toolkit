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
  render: () => ReactNode;
}

export type Scheme = (resolution: Resolution, styles?: Styles) => string;

export interface SchemeConfig {
  path: string;
  scheme: Scheme;
}

export interface ThemeConfig {
  name: string;
  author: string;
  screens: ScreenConfig[];
  schemes: SchemeConfig[];
  styles?: Styles;
  languages: Language[];
  fallbackLanguage: Language;
}
