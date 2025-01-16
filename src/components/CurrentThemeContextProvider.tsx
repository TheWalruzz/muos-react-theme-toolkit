import { themes } from "@/config";
import { CurrentThemeContext } from "@/context/CurrentThemeContext";
import { ThemeConfig } from "@/types";
import { PropsWithChildren, useState } from "react";

export function CurrentThemeContextProvider({ children }: PropsWithChildren) {
  const [currentTheme, setCurrentTheme] = useState<ThemeConfig>(
    () => themes[0]
  );

  return (
    <CurrentThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </CurrentThemeContext.Provider>
  );
}
