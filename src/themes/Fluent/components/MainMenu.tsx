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

import styles from "./MainMenu.module.css";
import { Box } from "./Box";

interface Props {
  itemIndex: number;
  showBackground?: boolean;
  transparentHeader?: boolean;
}

export function MainMenu({
  itemIndex,
  showBackground,
  transparentHeader = true,
}: Props) {
  const { width, height } = useResolution();
  const { t } = useTranslation();

  const iconSize = useMemo(
    () => Math.round((height / 7.5) * (width === height ? 0.9 : 1)),
    [width, height]
  );
  const iconSizeSmall = useMemo(() => Math.round(height / 15), [height]);

  const itemsMain = useMemo(
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
    ],
    [t, iconSize]
  );

  const itemsMisc = useMemo(
    () => [
      <InfoRegular fontSize={iconSizeSmall} />,
      <SettingsRegular fontSize={iconSizeSmall} />,
      <ArrowCounterclockwiseRegular fontSize={iconSizeSmall} />,
      <PowerRegular fontSize={iconSizeSmall} />,
    ],
    [iconSizeSmall]
  );

  return (
    <Default
      showBackground={showBackground}
      transparentHeader={transparentHeader}
    >
      <div className={styles.MainMenu}>
        <div className={styles.mainList}>
          {itemsMain.map((item, index) => (
            <MenuItem
              key={`MainMenu_mainItem-${width}x${height}-${itemIndex}-${index}`}
              active={index === itemIndex}
              icon={item.icon}
              label={item.text}
            />
          ))}
        </div>
        <div className={styles.miscListContainer}>
          <Box className={styles.miscList}>
            {itemsMisc.map((item, index) => (
              <Box
                key={`MainMenu_miscItem-${width}x${height}-${itemIndex}-${index}`}
                active={index + 4 === itemIndex}
                withBorders={false}
                small
              >
                {item}
              </Box>
            ))}
          </Box>
        </div>
      </div>
    </Default>
  );
}
