import { themes } from "@/config";
import { useCurrentTheme } from "@/context/CurrentThemeContext";
import { ChangeEvent, useCallback, useMemo } from "react";

import styles from "./ThemeSelector.module.css";

export function ThemeSelector() {
  const { currentTheme, setCurrentTheme } = useCurrentTheme();

  const currentIndex = useMemo(
    () => themes.findIndex((theme) => theme === currentTheme)!.toString(),
    [currentTheme]
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setCurrentTheme(themes[Number(e.target.value)]);
    },
    [setCurrentTheme]
  );

  return (
    <label className={styles.ThemeSelector}>
      Theme
      <select value={currentIndex} onChange={handleChange}>
        {themes.map((theme, index) => (
          <option key={`${index}-${theme.name}`} value={index.toString()}>
            {theme.name}
          </option>
        ))}
      </select>
    </label>
  );
}
