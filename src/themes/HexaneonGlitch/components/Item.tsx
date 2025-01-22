import { ReactNode } from "react";
import classNames from "classnames";

import styles from "./Item.module.css";

interface Props {
  icon: ReactNode;
  active: boolean;
}

export function Item({ icon, active }: Props) {
  return (
    <div
      className={classNames(styles.Item, {
        [styles.active]: active,
      })}
    >
      <div className={styles.hexagon} />
      <div className={styles.icon}>{icon}</div>
    </div>
  );
}
