import { ReactNode } from "react";
import { Language } from "./i18n";

export interface RefType {
  type: "screen";
  current: HTMLElement;
  meta: {
    path: string;
    language: Language;
    width: number;
    height: number;
  };
}

export interface Resolution {
  width: number;
  height: number;
}

export interface ScreenConfig {
  path: string;
  overrideResolution?: (originalResolution: Resolution) => Resolution;
  render: () => ReactNode;
}

export type Scheme = (resolution: Resolution) => string;

export interface SchemeConfig {
  path: string;
  scheme: Scheme;
}
