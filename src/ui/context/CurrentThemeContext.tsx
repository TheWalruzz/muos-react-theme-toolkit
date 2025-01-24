import { createContext, useContext } from "react";
import { ThemeConfig } from "@/types";

interface CurrentTheme {
  currentTheme: ThemeConfig;
  currentThemeIndex: number;
  setCurrentThemeIndex: (index: number) => void;
}

export const CurrentThemeContext = createContext<CurrentTheme>(null as never);

export const useCurrentTheme = () => useContext(CurrentThemeContext);
