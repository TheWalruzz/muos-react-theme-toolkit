import classNames from "classnames";
import { PropsWithChildren } from "react";

import styles from "./ScreenWithHeaderAndFooter.module.css";

interface Props {
  className?: string;
}

export function ScreenWithHeaderAndFooter({
  children,
  className,
}: PropsWithChildren<Props>) {
  return (
    <div className={classNames(styles.ScreenWithHeaderAndFooter, className)}>
      <div className={styles.header} />
      {children}
      <div className={styles.footer} />
    </div>
  );
}
