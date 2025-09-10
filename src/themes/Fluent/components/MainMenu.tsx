import { useMemo } from "react";
import { Default } from "./Default";
import { useTranslation } from "react-i18next";
import { useResolution } from "@/utils/useResolution";
import {
  GamesRegular,
  CollectionsRegular,
  HistoryRegular,
  AppsRegular,
  InfoRegular,
  SettingsRegular,
  ArrowCounterclockwiseRegular,
  PowerRegular,
} from "@fluentui/react-icons";
import { MenuItem } from "./MenuItem";
import { ScreenWithHeaderAndFooter } from "./ScreenWithHeaderAndFooter";

import styles from "./MainMenu.module.css";

interface Props {
  itemIndex: number;
  showBackground?: boolean;
}

export function MainMenu({ itemIndex, showBackground }: Props) {
  const { width, height } = useResolution();
  const { t } = useTranslation();

  const iconSize = useMemo(() => Math.round(height / 10), [height]);
  const itemHeight = useMemo(
    () => iconSize + 2 * Math.round(height / 27),
    [height, iconSize]
  );

  const items = useMemo(
    () => [
      {
        icon: <GamesRegular fontSize={iconSize} />,
        text: t("menu.explore", "Content"),
      },
      {
        icon: <CollectionsRegular fontSize={iconSize} />,
        text: t("menu.collections", "Collections"),
      },
      {
        icon: <HistoryRegular fontSize={iconSize} />,
        text: t("menu.history", "History"),
      },
      {
        icon: <AppsRegular fontSize={iconSize} />,
        text: t("menu.applications", "Applications"),
      },
      {
        icon: <InfoRegular fontSize={iconSize} />,
        text: t("menu.information", "Information"),
      },
      {
        icon: <SettingsRegular fontSize={iconSize} />,
        text: t("menu.configuration", "Settings"),
      },
      {
        icon: <ArrowCounterclockwiseRegular fontSize={iconSize} />,
        text: t("menu.reboot", "Restart"),
      },
      {
        icon: <PowerRegular fontSize={iconSize} />,
        text: t("menu.shutdown", "Shut down"),
      },
    ],
    [t, iconSize]
  );

  return (
    <Default hideBackground={!showBackground}>
      <ScreenWithHeaderAndFooter className={styles.MainMenu}>
        <div
          className={styles.list}
          style={{
            top:
              Math.round(height / 2) -
              Math.round(itemHeight / 2) -
              itemIndex * Math.round((1.5 * height) / 120) -
              itemIndex * itemHeight,
          }}
        >
          {items.map((item, index) => (
            <MenuItem
              key={`MainMenu_item-${width}x${height}-${itemIndex}-${index}`}
              active={index === itemIndex}
              icon={item.icon}
              label={item.text}
            />
          ))}
        </div>
      </ScreenWithHeaderAndFooter>
    </Default>
  );
}
