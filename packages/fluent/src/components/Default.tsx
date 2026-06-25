import { type PropsWithChildren } from "react";
import classNames from "classnames";

import styles from "./Default.module.css";

interface Props {
  showBackground?: boolean;
  showHeader?: boolean;
  transparentHeader?: boolean;
}

export function Default({
  children,
  showBackground = true,
  showHeader = true,
  transparentHeader = false,
}: PropsWithChildren<Props>) {
  return (
    <div
      className={classNames(styles.Default, {
        [styles.BackgroundShown]: showBackground,
      })}
    >
      {showHeader && (
        <div
          className={classNames(styles.header, {
            [styles.transparentHeader]: transparentHeader,
          })}
        />
      )}
      {children}
    </div>
  );
}
