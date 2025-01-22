import { ThemeConfig } from "./types";
import {
  minimalRound,
  minimalRoundLime,
  minimalRoundNight,
  minimalRoundSummer,
} from "./themes/MinimalRound";
import {
  minimalRoundGrid,
  minimalRoundGridCherry,
  minimalRoundGridDarkCherry,
  minimalRoundGridLime,
  minimalRoundGridNight,
  minimalRoundGridSummer,
} from "./themes/MinimalRoundGrid";

export const themes: ThemeConfig[] = [
  // Minimal Round
  minimalRound,
  minimalRoundSummer,
  minimalRoundNight,
  minimalRoundLime,
  // Minimal Round Grid
  minimalRoundGrid,
  minimalRoundGridSummer,
  minimalRoundGridNight,
  minimalRoundGridLime,
  minimalRoundGridCherry,
  minimalRoundGridDarkCherry,
];
