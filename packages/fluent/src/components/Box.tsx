import classNames from "classnames";
import { PropsWithChildren } from "react";

import styles from "./Box.module.css";

interface Props {
  active?: boolean;
  className?: string;
  centered?: boolean;
  withBorders?: boolean;
  small?: boolean;
  smallPadding?: boolean;
}

export function Box({
  children,
  active,
  className,
  centered,
  withBorders = true,
  smallPadding = false,
  small = false,
}: PropsWithChildren<Props>) {
  return (
    <div
      className={classNames(styles.Box, className, {
        [styles.active]: active,
        [styles.centered]: centered,
        [styles.withBorders]: withBorders,
        [styles.small]: small,
        [styles.smallPadding]: smallPadding,
      })}
    >
      {children}
    </div>
  );
}
