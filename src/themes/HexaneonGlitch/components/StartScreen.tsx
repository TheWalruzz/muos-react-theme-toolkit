import { Scanlines } from "./Scanlines";

import styles from "./StartScreen.module.css";

export function StartScreen() {
  return (
    <div className={styles.StartScreen}>
      <div className={styles.text}>muOS</div>
      <Scanlines />
    </div>
  );
}
