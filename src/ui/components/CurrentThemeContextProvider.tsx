import { themes } from "@/config";
import { CurrentThemeContext } from "@/ui/context/CurrentThemeContext";
import { PropsWithChildren, useState } from "react";

export function CurrentThemeContextProvider({ children }: PropsWithChildren) {
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
