import { ThemeConfig } from "./types";
import {
  minimalRoundGrid,
  minimalRoundGridCherry,
  minimalRoundGridDarkCherry,
  minimalRoundGridLime,
  minimalRoundGridNight,
  minimalRoundGridSummer,
} from "./themes/MinimalRoundGrid";
import {
  minimalRoundGridIcons,
  minimalRoundGridIconsLime,
  minimalRoundGridIconsNight,
  minimalRoundGridIconsSummer,
  minimalRoundGridIconsCherry,
} from "./themes/MinimalRoundGridIcons";

export const themes: ThemeConfig[] = [
  // Minimal Round Grid
  minimalRoundGrid,
  minimalRoundGridSummer,
  minimalRoundGridNight,
  minimalRoundGridLime,
  minimalRoundGridCherry,
  minimalRoundGridDarkCherry,
  // Minimal Round Grid Icons
  minimalRoundGridIcons,
  minimalRoundGridIconsLime,
  minimalRoundGridIconsNight,
  minimalRoundGridIconsSummer,
  minimalRoundGridIconsCherry,
];
