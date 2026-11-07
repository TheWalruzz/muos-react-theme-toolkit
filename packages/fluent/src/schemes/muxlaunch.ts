import { colorVar, numberVar, type Scheme } from "@mustardos-react-ttk/core";

export const muxlaunchScheme: Scheme = ({ height, width }, styles) => {
  const bigItemHeight =
    height -
    Math.round(height / numberVar(styles, "--header-height-divider")) -
    3 * Math.round(height / numberVar(styles, "--item-grid-gap-divider")) -
    Math.round(height / 6.5);

  return `[glyph]
GRID = ${Math.round((height / 7) * (width === height ? 0.9 : 1))}

[grid]
NAVIGATION_TYPE = 2
BACKGROUND_ALPHA = 0
COLUMN_COUNT = 4
ROW_COUNT = 2
LOCATION_X = ${Math.round(height / numberVar(styles, "--padding-divider"))}
LOCATION_Y = ${
    Math.round(height / numberVar(styles, "--header-height-divider")) +
    Math.round(height / numberVar(styles, "--padding-divider"))
  }
CURRENT_ITEM_LABEL_TEXT_ALPHA = 0
CELL_RADIUS = ${Math.round(height / 108)}
CELL_IMAGE_PADDING_TOP = ${
    Math.round(bigItemHeight / 2) -
    Math.round((height / 7) * (width === height ? 0.9 : 1))
  }
CELL_TEXT_PADDING_BOTTOM = ${
    Math.round(bigItemHeight / 2) -
    Math.round((height / 7) * (width === height ? 0.9 : 1) * 0.75)
  }
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
CELL_DEFAULT_IMAGE_RECOLOUR_ALPHA = 255
CELL_DEFAULT_TEXT = ${colorVar(styles, "--text-color")}
CELL_DEFAULT_TEXT_ALPHA = 255
CELL_FOCUS_BACKGROUND = ${colorVar(styles, "--item-color-active")}
CELL_FOCUS_BACKGROUND_ALPHA = 255
CELL_FOCUS_BORDER = ${colorVar(styles, "--item-border-color-active")}
CELL_FOCUS_BORDER_ALPHA = 255
CELL_FOCUS_IMAGE_ALPHA = 255
CELL_FOCUS_IMAGE_RECOLOUR = ${colorVar(styles, "--text-color")}
CELL_FOCUS_IMAGE_RECOLOUR_ALPHA = 255
CELL_FOCUS_TEXT = ${colorVar(styles, "--text-color")}
CELL_FOCUS_TEXT_ALPHA = 255
CELL_ANIMATION_TIME = 250

[misc]
CONTENT_PADDING_LEFT = 0
CONTENT_WIDTH = ${width}
STATIC_ALIGNMENT = 3
`;
};
