import { PropsWithChildren } from "react";

import styles from "./Default.module.css";
import classNames from "classnames";

interface Props {
  hideBackground?: boolean;
}

export function Default({
  children,
  hideBackground,
}: PropsWithChildren<Props>) {
  return (
    <div
      className={classNames(styles.Default, {
        [styles.BackgroundHidden]: hideBackground,
      })}
    >
      {children}
    </div>
  );
}
