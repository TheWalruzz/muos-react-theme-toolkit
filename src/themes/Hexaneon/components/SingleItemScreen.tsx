import { Default } from "./Default";
import { Item } from "./Item";
import { ReactNode } from "react";
import classNames from "classnames";
import { Label } from "./Label";

import styles from "./SingleItemScreen.module.css";

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
        <Item active={false} icon={icon} />
        <div className={styles.label}>
          <Label text={text} />
        </div>
      </div>
    </Default>
  );
}
