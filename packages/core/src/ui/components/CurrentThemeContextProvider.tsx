import { ThemeConfig } from "@/types";
import { ThemesContext } from "@/ui/context/ThemesContext";
import { PropsWithChildren, useState } from "react";

interface Props {
  themes: ThemeConfig[];
}

export function CurrentThemeContextProvider({
  themes,
  children,
}: PropsWithChildren<Props>) {
  // it uses indices to make sure configs update when `styles` property changes
  const [currentThemeIndex, setCurrentThemeIndex] = useState<number>(0);

  return (
    <ThemesContext.Provider
      value={{
        currentTheme: themes[currentThemeIndex],
        currentThemeIndex,
        setCurrentThemeIndex,
        themes,
      }}
    >
      {children}
    </ThemesContext.Provider>
  );
}
