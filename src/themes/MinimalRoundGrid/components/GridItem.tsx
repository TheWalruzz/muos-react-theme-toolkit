import classNames from "classnames";
import { ReactNode, useMemo } from "react";

import styles from "./GridItem.module.css";

const capitalize = (input: string) => input[0].toUpperCase() + input.slice(1);

interface Props {
  icon: ReactNode;
  active: boolean;
  itemName?: string;
}

export function GridItem({ icon, active, itemName }: Props) {
  const label = useMemo(() => {
    if (!itemName) {
      return "";
    }

    switch (itemName) {
      case "archive":
        return "Archives";
      case "flip":
        return "Flip Clock";
      case "ppsspp":
        return "PPSSPP";
      case "retroarch":
        return "RetroArch";
      case "rgbcontroller":
        return "RGB Control";
      case "scummvm":
        return "ScummVM";
      case "task":
        return "Tasks";
      default:
        return capitalize(itemName);
    }
  }, [itemName]);

  return (
    <div
      className={classNames(styles.GridItem, {
        [styles.active]: active,
      })}
    >
      {icon}
      {label}
    </div>
  );
}
