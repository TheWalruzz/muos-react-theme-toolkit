import { useResolution } from "@mustardos-react-ttk/core";
import { useMemo } from "react";
import { Box } from "./Box";
import { MainMenuContainer } from "./MainMenuContainer";

export function MainMenu() {
  const { height } = useResolution();
  const iconSizeSmall = useMemo(() => Math.round(height / 15), [height]);

  const miscItems = useMemo(
    () => [
      <Box key="dummy-1" withBorders={false} small>
        <div style={{ width: iconSizeSmall, height: iconSizeSmall }} />
      </Box>,
      <Box key="dummy-2" withBorders={false} small>
        <div style={{ width: iconSizeSmall, height: iconSizeSmall }} />
      </Box>,
      <Box key="dummy-3" withBorders={false} small>
        <div style={{ width: iconSizeSmall, height: iconSizeSmall }} />
      </Box>,
      <Box key="dummy-4" withBorders={false} small>
        <div style={{ width: iconSizeSmall, height: iconSizeSmall }} />
      </Box>,
    ],
    [],
  );

  return (
    <MainMenuContainer
      showBackground
      transparentHeader={false}
      miscItems={miscItems}
    />
  );
}
