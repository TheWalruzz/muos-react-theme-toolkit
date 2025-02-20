import { themes } from "@/config";
import { useCurrentTheme } from "@/ui/context/CurrentThemeContext";
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
      {themes.length > 0 ? (
        <select value={currentThemeIndex} onChange={handleChange}>
          {themes.map((theme, index) => (
            <option key={`${index}-${theme.name}`} value={index.toString()}>
              {theme.name}
            </option>
          ))}
        </select>
      ) : (
        <div className={styles.empty}>No themes</div>
      )}
    </label>
  );
}
