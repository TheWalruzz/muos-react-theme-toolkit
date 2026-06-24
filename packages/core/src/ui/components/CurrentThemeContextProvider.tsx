import { ThemeConfig } from "@/types";
import { CurrentThemeContext } from "@/ui/context/CurrentThemeContext";
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
    <CurrentThemeContext.Provider
      value={{
        currentTheme: themes[currentThemeIndex],
        currentThemeIndex,
        setCurrentThemeIndex,
      }}
    >
      {children}
    </CurrentThemeContext.Provider>
  );
}
