import { Default } from "./Default";
import { MenuItem } from "./MenuItem";
import { ReactNode } from "react";
import classNames from "classnames";

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
        <MenuItem active icon={icon} text={text} />
      </div>
    </Default>
  );
}
