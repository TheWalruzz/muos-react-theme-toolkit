import { Default } from "./Default";

import styles from "./BootLogo.module.css";
import muosLogo from "./muOS_logo.png";

export function BootLogo() {
  return (
    <Default showHeader={false} showBackground>
      <div className={styles.BootLogo}>
        <img src={muosLogo} />
      </div>
    </Default>
  );
}
