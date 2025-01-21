import { Default } from "./Default";

import styles from "./StartScreen.module.css";

export function StartScreen() {
  return (
    <Default>
      <div className={styles.StartScreen}>muOS</div>
    </Default>
  );
}
