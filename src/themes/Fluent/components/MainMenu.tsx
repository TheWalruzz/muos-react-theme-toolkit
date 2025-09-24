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
  showHeader?: boolean;
}

export function MainMenu({ itemIndex, showBackground, showHeader }: Props) {
  const { width, height } = useResolution();
  const { t } = useTranslation();

  const iconSize = useMemo(() => Math.round(height / 8), [height]);
  const iconSizeSmall = useMemo(() => Math.round(height / 20), [height]);

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
      {
        icon: <InfoRegular fontSize={iconSizeSmall} />,
        text: t("menu.information", "Information"),
      },
      {
        icon: <SettingsRegular fontSize={iconSizeSmall} />,
        text: t("menu.configuration", "Settings"),
      },
      {
        icon: <ArrowCounterclockwiseRegular fontSize={iconSizeSmall} />,
        text: t("menu.reboot", "Restart"),
      },
      {
        icon: <PowerRegular fontSize={iconSizeSmall} />,
        text: t("menu.shutdown", "Shut down"),
      },
    ],
    [iconSizeSmall, t]
  );

  return (
    <Default showBackground={showBackground} showHeader={showHeader}>
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
          <Box className={styles.miscList} smallPadding>
            {itemsMisc.map((item, index) => (
              <Box
                key={`MainMenu_miscItem-${width}x${height}-${itemIndex}-${index}`}
                active={index + 4 === itemIndex}
                withBorders={false}
                small
              >
                {item.icon}
              </Box>
            ))}
          </Box>
        </div>
      </div>
    </Default>
  );
}
