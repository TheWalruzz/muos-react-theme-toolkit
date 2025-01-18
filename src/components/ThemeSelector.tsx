import { themes } from "@/config";
import { useCurrentTheme } from "@/context/CurrentThemeContext";
import { ChangeEvent, useCallback } from "react";

import styles from "./ThemeSelector.module.css";

export function ThemeSelector() {
  const { currentThemeIndex, setCurrentThemeIndex } = useCurrentTheme();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setCurrentThemeIndex(Number(e.target.value));
    },
    [setCurrentThemeIndex]
  );

  return (
    <label className={styles.ThemeSelector}>
      Theme
      <select value={currentThemeIndex} onChange={handleChange}>
        {themes.map((theme, index) => (
          <option key={`${index}-${theme.name}`} value={index.toString()}>
            {theme.name}
          </option>
        ))}
      </select>
    </label>
  );
}
