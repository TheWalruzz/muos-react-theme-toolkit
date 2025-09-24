import { Scheme } from "@/types";
import { pxVar } from "@/utils/vars";

const getRowCount = (width: number, height: number) => {
  // square ratio, can hold more rows
  if (width === height) {
    return 4;
  }

  // widescreen resolutions can hold less rows, due to size calculations being width-dependent (but items are bigger in return)
  if (width / height > 1.5) {
    return 2;
  }

  return 3;
};

export const muxploreScheme: Scheme = ({ width, height }, styles) => `[grid]
NAVIGATION_TYPE = 2
BACKGROUND_ALPHA = 0
COLUMN_COUNT = 4
ROW_COUNT = ${getRowCount(width, height)}
LOCATION_X = ${Math.floor(
  (width - Math.floor(width / 15) * 4 - 4 * (Math.floor(width / 7) + 2)) / 2
)}
LOCATION_Y = ${Math.floor(
  (height -
    Math.floor(width / 15) * getRowCount(width, height) -
    getRowCount(width, height) * (Math.floor(width / 7) + 2)) /
    2
)}
CELL_WIDTH = ${Math.floor(width / 7) + 2 + 56}
CELL_HEIGHT = ${Math.floor(width / 7) + 2 + 56}
CELL_RADIUS = ${Math.floor(width / 7) + 2 + 56}
CELL_IMAGE_PADDING_SIDE = 28
COLUMN_WIDTH = ${Math.floor(width / 7) + 2 + Math.floor(width / 15)}
ROW_HEIGHT = ${Math.floor(width / 7) + 2 + Math.floor(width / 15)}
CURRENT_ITEM_LABEL_TEXT_ALPHA = 0
CURRENT_ITEM_LABEL_BORDER_ALPHA = 0
CELL_IMAGE_PADDING_TOP = 0
CELL_TEXT_PADDING_BOTTOM = 0
CELL_TEXT_PADDING_SIDE = 0
CELL_BORDER_WIDTH = 2
CELL_DEFAULT_BACKGROUND_ALPHA = 0
CELL_DEFAULT_IMAGE_ALPHA = 255
CELL_DEFAULT_IMAGE_RECOLOUR_ALPHA = 0
CELL_DEFAULT_TEXT_ALPHA = 0
CELL_DEFAULT_BORDER_ALPHA = 0
CELL_FOCUS_BACKGROUND_ALPHA = 0
CELL_FOCUS_BORDER = ffffff
CELL_FOCUS_BORDER_ALPHA = 0
CELL_FOCUS_IMAGE_ALPHA = 255
CELL_FOCUS_IMAGE_RECOLOUR_ALPHA = 0
CELL_FOCUS_TEXT_ALPHA = 0

[misc]
CONTENT_WIDTH = ${Math.round(width / 2 - 2 * pxVar(styles, "--padding"))}
NAVIGATION_TYPE = 2
`;
