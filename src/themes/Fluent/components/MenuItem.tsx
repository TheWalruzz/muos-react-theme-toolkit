import classNames from "classnames";
import { ReactNode } from "react";

import styles from "./MenuItem.module.css";

interface Props {
  icon: ReactNode;
  active: boolean;
  label: string;
}

export function MenuItem({ icon, active, label }: Props) {
  return (
    <div
      className={classNames(styles.MenuItem, {
        [styles.active]: active,
      })}
    >
      {icon}
      <div className={styles.label}>{label}</div>
    </div>
  );
}
