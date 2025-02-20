import { PropsWithChildren } from "react";

import styles from "./Default.module.css";

export function Default({ children }: PropsWithChildren) {
  return <div className={styles.Default}>{children}</div>;
}
