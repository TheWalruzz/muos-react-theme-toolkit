import { Scheme } from "@/types";
import { colorVar, numberVar, pxVar } from "@/utils/vars";

export const muxcollectScheme: Scheme = ({ width, height }, styles) => `[grid]
NAVIGATION_TYPE = 2
BACKGROUND_ALPHA = 0
COLUMN_COUNT = 4
ROW_COUNT = 2
LOCATION_X = ${pxVar(styles, "--padding")}
LOCATION_Y = ${
  Math.round(height / numberVar(styles, "--header-height-divider")) +
  pxVar(styles, "--padding")
}
COLUMN_WIDTH = ${Math.round((width - pxVar(styles, "--padding")) / 4)}
ROW_HEIGHT = ${Math.round(
  (height -
    2 * Math.round(height / numberVar(styles, "--header-height-divider"))) /
    2
)}
CURRENT_ITEM_LABEL_TEXT_ALPHA = 0
CELL_WIDTH = ${Math.round(
  (width -
    2 * pxVar(styles, "--padding") -
    3 * pxVar(styles, "--item-grid-gap")) /
    4
)}
CELL_HEIGHT = ${Math.round(
  (height -
    2 * Math.round(height / numberVar(styles, "--header-height-divider")) -
    2 * pxVar(styles, "--item-grid-gap")) /
    2
)}
CELL_RADIUS = ${Math.round(height / 54)}
CELL_IMAGE_PADDING_TOP = 0
CELL_TEXT_PADDING_BOTTOM = ${
  Math.round(
    (height -
      2 * Math.round(height / numberVar(styles, "--header-height-divider")) -
      2 * pxVar(styles, "--item-grid-gap")) /
      4
  ) -
  2 * pxVar(styles, "--padding")
}
CELL_COLUMN_ALIGN = 0
CELL_ROW_ALIGN = 0
CELL_BORDER_WIDTH = 1
CELL_SHADOW = ${colorVar(styles, "--fake-shadow-color")}
CELL_SHADOW_X_OFFSET = 0
CELL_SHADOW_Y_OFFSET = 2
CELL_SHADOW_WIDTH = 4
CELL_DEFAULT_BACKGROUND = ${colorVar(styles, "--item-color")}
CELL_DEFAULT_BACKGROUND_ALPHA = 255
CELL_DEFAULT_BORDER = ${colorVar(styles, "--item-border-color")}
CELL_DEFAULT_BORDER_ALPHA = 255
CELL_DEFAULT_IMAGE_ALPHA = 0
CELL_DEFAULT_TEXT = ${colorVar(styles, "--text-color")}
CELL_DEFAULT_TEXT_ALPHA = 255
CELL_FOCUS_BACKGROUND = ${colorVar(styles, "--item-color-active")}
CELL_FOCUS_BACKGROUND_ALPHA = 255
CELL_FOCUS_BORDER = ${colorVar(styles, "--item-border-color-active")}
CELL_FOCUS_BORDER_ALPHA = 255
CELL_FOCUS_IMAGE_ALPHA = 0
CELL_FOCUS_TEXT = ${colorVar(styles, "--text-color")}
CELL_FOCUS_TEXT_ALPHA = 255

[list]
LIST_DEFAULT_LABEL_LONG_MODE = 1

[misc]
CONTENT_WIDTH = ${Math.round(width / 2 - pxVar(styles, "--padding"))}
NAVIGATION_TYPE = 0
`;
