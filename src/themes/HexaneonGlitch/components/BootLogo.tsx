import { Default } from "./Default";

import styles from "./BootLogo.module.css";

export function BootLogo() {
  return (
    <Default>
      <div className={styles.BootLogo}>muOS</div>
    </Default>
  );
}
