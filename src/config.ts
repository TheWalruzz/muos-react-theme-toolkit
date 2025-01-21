import { ThemeConfig } from "./types";
import {
  minimalRound,
  minimalRoundLime,
  minimalRoundNight,
  minimalRoundSummer,
} from "./themes/MinimalRound";
import {
  minimalRoundGrid,
  minimalRoundGridLime,
  minimalRoundGridNight,
  minimalRoundGridSummer,
} from "./themes/MinimalRoundGrid";
import {
  hexaneonBlueCyan,
  hexaneon,
  hexaneonPurplePink,
  hexaneonBlackPink,
  hexaneonBlackCyan,
  hexaneonBlackGreen,
  hexaneonBlackRed,
  hexaneonRed,
} from "./themes/Hexaneon";

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
  // Hexaneon
  hexaneon,
  hexaneonBlackPink,
  hexaneonBlackCyan,
  hexaneonBlackGreen,
  hexaneonBlackRed,
  hexaneonBlueCyan,
  hexaneonPurplePink,
  hexaneonRed,
];
