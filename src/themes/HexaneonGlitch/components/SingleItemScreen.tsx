import { Item } from "./Item";
import { ReactNode } from "react";
import classNames from "classnames";
import { Label } from "./Label";

import styles from "./SingleItemScreen.module.css";

interface Props {
  icon: ReactNode;
  text: string;
  centered?: boolean;
  chromaticAberration?: boolean;
}

export function SingleItemScreen({
  icon,
  text,
  centered = true,
  chromaticAberration = false,
}: Props) {
  return (
    <div className={styles.SingleItemScreen}>
      <div
        className={classNames(styles.screen, {
          [styles.centered]: centered,
          [styles.chromaticAberration]: chromaticAberration,
        })}
      >
        <Item active={false} icon={icon} />
        <div className={styles.label}>
          <Label text={text} />
        </div>
      </div>
    </div>
  );
}
