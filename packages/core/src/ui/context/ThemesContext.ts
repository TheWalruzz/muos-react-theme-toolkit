import { createContext, useContext } from "react";
import { ThemeConfig } from "@/types";

interface Themes {
  currentTheme: ThemeConfig;
  currentThemeIndex: number;
  setCurrentThemeIndex: (index: number) => void;
  themes: ThemeConfig[];
}

export const ThemesContext = createContext<Themes>(null as never);

export const useThemes = () => useContext(ThemesContext);
