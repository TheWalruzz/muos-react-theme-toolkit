import { Default } from "./Default";
import classNames from "classnames";

import styles from "./SingleItemScreen.module.css";

interface Props {
  text: string;
  centered?: boolean;
}

export function SingleItemScreen({ text, centered = true }: Props) {
  return (
    <Default>
      <div
        className={classNames(styles.SingleItemScreen, {
          [styles.centered]: centered,
        })}
      >
        <div className={styles.label}>{text}</div>
      </div>
    </Default>
  );
}
