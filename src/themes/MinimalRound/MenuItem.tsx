import classNames from "classnames";
import { ReactNode } from "react";

import styles from "./MenuItem.module.css";

interface Props {
  icon: ReactNode;
  text: string;
  active: boolean;
}

export function MenuItem({ icon, text, active }: Props) {
  return (
    <div
      className={classNames(styles.MenuItem, {
        [styles.MenuItem_active]: active,
      })}
    >
      <div className={styles.MenuItem_icon}>{icon}</div>
      <div className={styles.MenuItem_text}>{text}</div>
    </div>
  );
}
