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
  /** Path for the screen destination */
  path: string;
  /** Override the rendered resolution for that screen. Useful for creating previews, grid icons etc. */
  overrideResolution?: (originalResolution: Resolution) => Resolution;
  /** Static prefix for the destination path */
  pathPrefix?: string;
  /** Function that returns the component to render for the screen. */
  render: () => ReactNode;
  /** @deprecated Should this screen be included in internal assets.muxzip? */
  includeInAssetsPackage?: boolean;
  /** Should this screen not be rendered for localized assets? */
  ignoreInLocalized?: boolean;
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
