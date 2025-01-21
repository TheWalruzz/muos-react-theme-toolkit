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

import styles from "./MainMenu.module.css";
import { Label } from "./Label";

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
        <div className={styles.grid}>
          {items.map((item, index) => (
            <MenuItem
              key={`MainMenu_item-${width}x${height}-${itemIndex}-${index}`}
              active={index === itemIndex}
              icon={item.icon}
            />
          ))}
        </div>
        <div className={styles.label}>
          <Label text={items[itemIndex].text} />
        </div>
      </div>
    </Default>
  );
}
