import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { ThemeConfig } from "@/types";

interface CurrentTheme {
  currentTheme: ThemeConfig;
  setCurrentTheme: Dispatch<SetStateAction<ThemeConfig>>;
}

export const CurrentThemeContext = createContext<CurrentTheme>(null as never);

export const useCurrentTheme = () => useContext(CurrentThemeContext);
