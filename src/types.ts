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
