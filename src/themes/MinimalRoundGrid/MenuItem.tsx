import classNames from "classnames";
import { ReactNode } from "react";

import styles from "./MenuItem.module.css";

interface Props {
  icon: ReactNode;
  active: boolean;
  size?: "sm" | "lg";
}

export function MenuItem({ icon, active, size = "sm" }: Props) {
  return (
    <div
      className={classNames(styles.MenuItem, {
        [styles.active]: active,
        [styles.large]: size === "lg",
      })}
    >
      {icon}
    </div>
  );
}
