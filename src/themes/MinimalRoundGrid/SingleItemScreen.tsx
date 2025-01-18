import { Default } from "./Default";
import { MenuItem } from "./MenuItem";
import { ReactNode } from "react";
import classNames from "classnames";

import styles from "./SingleItemScreen.module.css";
import { Label } from "./Label";

interface Props {
  icon: ReactNode;
  text: string;
  centered?: boolean;
}

export function SingleItemScreen({ icon, text, centered = true }: Props) {
  return (
    <Default>
      <div
        className={classNames(styles.SingleItemScreen, {
          [styles.centered]: centered,
        })}
      >
        <MenuItem active icon={icon} size="lg" />
        <div className={styles.SingleItemScreen_label}>
          <Label text={text} />
        </div>
      </div>
    </Default>
  );
}
