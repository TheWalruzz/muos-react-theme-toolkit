import { PropsWithChildren } from "react";

import styles from "./Default.module.css";
import classNames from "classnames";

interface Props {
  showBackground?: boolean;
  showHeader?: boolean;
}

export function Default({
  children,
  showBackground = true,
  showHeader = true,
}: PropsWithChildren<Props>) {
  return (
    <div
      className={classNames(styles.Default, {
        [styles.BackgroundShown]: showBackground,
      })}
    >
      {showHeader && <div className={styles.header} />}
      {children}
    </div>
  );
}
