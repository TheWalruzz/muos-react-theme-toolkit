import { Scheme } from "@/types";
import { colorVar, numberVar } from "@/utils/vars";

export const muxploreScheme: Scheme = ({ width, height }, styles) => `[grid]
NAVIGATION_TYPE = 2
BACKGROUND_ALPHA = 0
COLUMN_COUNT = 4
ROW_COUNT = 2
LOCATION_X = ${Math.round(height / numberVar(styles, "--padding-divider"))}
LOCATION_Y = ${
  Math.round(height / numberVar(styles, "--header-height-divider")) +
  Math.round(height / numberVar(styles, "--padding-divider"))
}
COLUMN_WIDTH = ${Math.round((width - Math.round(height / numberVar(styles, "--padding-divider"))) / 4)}
ROW_HEIGHT = ${Math.round(
  (height -
    2 * Math.round(height / numberVar(styles, "--header-height-divider"))) /
    2,
)}
CURRENT_ITEM_LABEL_TEXT_ALPHA = 0
CELL_WIDTH = ${Math.round(
  (width -
    2 * Math.round(height / numberVar(styles, "--padding-divider")) -
    3 * Math.round(height / numberVar(styles, "--item-grid-gap-divider"))) /
    4,
)}
CELL_HEIGHT = ${Math.round(
  (height -
    2 * Math.round(height / numberVar(styles, "--header-height-divider")) -
    2 * Math.round(height / numberVar(styles, "--item-grid-gap-divider"))) /
    2,
)}
CELL_RADIUS = ${Math.round(height / 54)}
CELL_IMAGE_PADDING_TOP = 0
CELL_TEXT_PADDING_BOTTOM = 0
CELL_COLUMN_ALIGN = 0
CELL_ROW_ALIGN = 0
CELL_BORDER_WIDTH = 1
CELL_SHADOW = ${colorVar(styles, "--fake-shadow-color")}
CELL_SHADOW_X_OFFSET = 0
CELL_SHADOW_Y_OFFSET = ${Math.round(height / 240)}
CELL_SHADOW_WIDTH = ${Math.round(height / 120)}
CELL_DEFAULT_BACKGROUND = ${colorVar(styles, "--item-color")}
CELL_DEFAULT_BACKGROUND_ALPHA = 255
CELL_DEFAULT_BORDER = ${colorVar(styles, "--item-border-color")}
CELL_DEFAULT_BORDER_ALPHA = 255
CELL_DEFAULT_IMAGE_ALPHA = 255
CELL_DEFAULT_IMAGE_RECOLOUR = ${colorVar(styles, "--text-color")}
CELL_DEFAULT_IMAGE_RECOLOUR_ALPHA = 0
CELL_DEFAULT_TEXT = ${colorVar(styles, "--text-color")}
CELL_DEFAULT_TEXT_ALPHA = 0
CELL_FOCUS_BACKGROUND = ${colorVar(styles, "--item-color-active")}
CELL_FOCUS_BACKGROUND_ALPHA = 255
CELL_FOCUS_BORDER = ${colorVar(styles, "--item-border-color-active")}
CELL_FOCUS_BORDER_ALPHA = 255
CELL_FOCUS_IMAGE_RECOLOUR = ${colorVar(styles, "--text-color")}
CELL_FOCUS_IMAGE_RECOLOUR_ALPHA = 0
CELL_FOCUS_TEXT = ${colorVar(styles, "--text-color")}
CELL_FOCUS_TEXT_ALPHA = 0

[list]
LIST_DEFAULT_LABEL_LONG_MODE = 1

[misc]
CONTENT_WIDTH = ${Math.round(width / 2 - Math.round(height / numberVar(styles, "--padding-divider")))}
NAVIGATION_TYPE = 0
`;
