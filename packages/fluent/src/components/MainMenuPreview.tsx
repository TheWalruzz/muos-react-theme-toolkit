import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useResolution } from "@mustardos-react-ttk/core";
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
import { Box } from "./Box";
import { MainMenuContainer } from "./MainMenuContainer";

interface Props {
  itemIndex: number;
  showBackground?: boolean;
  transparentHeader?: boolean;
}

export function MainMenuPreview({
  itemIndex,
  showBackground,
  transparentHeader = true,
}: Props) {
  const { width, height } = useResolution();
  const { t } = useTranslation();

  const iconSize = useMemo(
    () => Math.round((height / 7) * (width === height ? 0.9 : 1)),
    [width, height],
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
    [t, iconSize],
  );

  const mainItems = useMemo(
    () =>
      itemsMain.map((item, index) => (
        <MenuItem
          key={`MainMenu_mainItem-${width}x${height}-${itemIndex}-${index}`}
          active={index === itemIndex}
          icon={item.icon}
          label={item.text}
        />
      )),
    [],
  );

  const itemsMisc = useMemo(
    () => [
      <InfoRegular fontSize={iconSizeSmall} />,
      <SettingsRegular fontSize={iconSizeSmall} />,
      <ArrowCounterclockwiseRegular fontSize={iconSizeSmall} />,
      <PowerRegular fontSize={iconSizeSmall} />,
    ],
    [iconSizeSmall],
  );

  const miscItems = useMemo(
    () =>
      itemsMisc.map((item, index) => (
        <Box
          key={`MainMenu_miscItem-${width}x${height}-${itemIndex}-${index}`}
          active={index + 4 === itemIndex}
          withBorders={false}
          small
        >
          {item}
        </Box>
      )),
    [],
  );

  return (
    <MainMenuContainer
      showBackground={showBackground}
      transparentHeader={transparentHeader}
      mainItems={mainItems}
      miscItems={miscItems}
    />
  );
}
