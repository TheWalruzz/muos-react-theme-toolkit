import { useMemo } from "react";
import { Default } from "./Default";
import { useTranslation } from "react-i18next";
import { useResolution } from "@/context/ResolutionContext";
import {
  Gamepad,
  History,
  Info,
  LayoutGrid,
  Power,
  RotateCw,
  Settings,
  Star,
} from "lucide-react";
import { MenuItem } from "./MenuItem";
import classNames from "classnames";

import styles from "./MainMenu.module.css";

interface Props {
  itemIndex: number;
}

export function MainMenu({ itemIndex }: Props) {
  const { width, height } = useResolution();
  const { t } = useTranslation();

  const items = useMemo(
    () => [
      {
        icon: <Gamepad size="50%" />,
        text: t("menu.explore", "Games"),
      },
      { icon: <Star size="50%" />, text: t("menu.favourites", "Favourites") },
      { icon: <History size="50%" />, text: t("menu.history", "History") },
      {
        icon: <LayoutGrid size="50%" />,
        text: t("menu.applications", "Applications"),
      },
      { icon: <Info size="50%" />, text: t("menu.information", "Information") },
      {
        icon: <Settings size="50%" />,
        text: t("menu.configuration", "Configuration"),
      },
      { icon: <RotateCw size="50%" />, text: t("menu.reboot", "Reboot") },
      { icon: <Power size="50%" />, text: t("menu.shutdown", "Shutdown") },
    ],
    [t]
  );

  return (
    <Default>
      <div className={styles.MainMenu}>
        <div
          className={styles.MainMenu_list}
          style={{
            transform: `translate(calc(${
              width / 2 - (width / 2) * itemIndex
            }px - (var(--item-size) / 2)), calc(-0.2 * var(--item-size)))`,
          }}
        >
          {items.map((item, index) => (
            <MenuItem
              key={`MainMenu_item-${width}x${height}-${itemIndex}-${index}`}
              active={index === itemIndex}
              icon={item.icon}
              text={item.text}
            />
          ))}
        </div>
        <div className={styles.MainMenu_dots}>
          {items.map((_, index) => (
            <div
              key={`MainMenu_dot-${width}x${height}-${itemIndex}-${index}`}
              className={classNames(styles.MainMenu_dot, {
                [styles.active]: index === itemIndex,
              })}
            />
          ))}
        </div>
      </div>
    </Default>
  );
}
