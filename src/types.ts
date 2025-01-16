import { ReactNode } from "react";

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
