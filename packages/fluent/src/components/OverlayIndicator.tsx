import { type ReactNode } from "react";

import styles from "./OverlayIndicator.module.css";

interface Props {
  index: number;
  icon: ReactNode;
}

export function OverlayIndicator({ index, icon }: Props) {
  return (
    <div className={styles.OverlayIndicator}>
      <div className={styles.indicator}>
        <div className={styles.iconContainer}>{icon}</div>
        <div className={styles.barContainer}>
          <div
            className={styles.bar}
            style={{ width: `${(index + 1) * 10}%` }}
          />
        </div>
      </div>
    </div>
  );
}
