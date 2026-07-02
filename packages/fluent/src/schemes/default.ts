import {
  colorVar,
  numberVar,
  pxVar,
  type Scheme,
} from "@mustardos-react-ttk/core";

export const defaultScheme: Scheme = (
  { width, height },
  styles,
) => `[background]
BACKGROUND = ${colorVar(styles, "--item-color")}
BACKGROUND_ALPHA = 0

[font]
FONT_HEADER_PAD_TOP = 2
FONT_HEADER_PAD_BOTTOM = 0
FONT_HEADER_ICON_PAD_TOP = 0
FONT_HEADER_ICON_PAD_BOTTOM = 0
FONT_FOOTER_PAD_TOP = 0
FONT_FOOTER_PAD_BOTTOM = 0
FONT_FOOTER_ICON_PAD_TOP = 0
FONT_FOOTER_ICON_PAD_BOTTOM = 0
FONT_MESSAGE_PAD_TOP = 0
FONT_MESSAGE_PAD_BOTTOM = 0
FONT_MESSAGE_ICON_PAD_TOP = 0
FONT_MESSAGE_ICON_PAD_BOTTOM = 0
FONT_LIST_PAD_LEFT = ${Math.round(height / 19) * 2}
FONT_LIST_PAD_RIGHT = ${Math.round(height / 38)}
FONT_LIST_PAD_TOP = 0
FONT_LIST_PAD_BOTTOM = 0
FONT_LIST_ICON_PAD_TOP = 0
FONT_LIST_ICON_PAD_BOTTOM = 0
FONT_LIST_SIZE = ${Math.round(height / 24)}
FONT_HEADER_SIZE = ${Math.round(height / 24) - 1}
FONT_FOOTER_SIZE = ${Math.round(height / 24)}
FONT_PANEL_SIZE = ${Math.round(height / 24)}

[glyph]
LIST = ${Math.round(height / 17)}
FOOTER = ${Math.round(height / 17)}
HEADER = ${Math.round(height / 10)}
GRID = 0

[status]
PADDING_RIGHT = ${Math.round(height / 38)}
ALIGN = 1

[battery]
BATTERY_NORMAL = ${colorVar(styles, "--text-color")}
BATTERY_ACTIVE = 86d72f
BATTERY_LOW = f8312f
BATTERY_NORMAL_ALPHA = 255
BATTERY_ACTIVE_ALPHA = 255
BATTERY_LOW_ALPHA = 255

[network]
NETWORK_NORMAL = ${colorVar(styles, "--text-color")}
NETWORK_ACTIVE = ${colorVar(styles, "--text-color")}
NETWORK_NORMAL_ALPHA = 255
NETWORK_ACTIVE_ALPHA = 255

[bluetooth]
BLUETOOTH_NORMAL = ${colorVar(styles, "--text-color")}
BLUETOOTH_ACTIVE = ${colorVar(styles, "--text-color")}
BLUETOOTH_NORMAL_ALPHA = 255
BLUETOOTH_ACTIVE_ALPHA = 255

[date]
DATETIME_ALIGN = 1
DATETIME_TEXT = ${colorVar(styles, "--text-color")}
DATETIME_ALPHA = 255
PADDING_LEFT = ${Math.round(height / 38)}

[footer]
FOOTER_HEIGHT = ${Math.round(height / pxVar(styles, "--header-height-divider"))}
FOOTER_BACKGROUND = FFFFFF
FOOTER_BACKGROUND_ALPHA = 0
FOOTER_TEXT = ${colorVar(styles, "--text-color")}
FOOTER_TEXT_ALPHA = 255

[header]
HEADER_HEIGHT = ${Math.round(height / pxVar(styles, "--header-height-divider"))}
HEADER_BACKGROUND = FFFFFF
HEADER_BACKGROUND_ALPHA = 0
HEADER_TEXT = ${colorVar(styles, "--text-color")}
HEADER_TEXT_ALPHA = 255
HEADER_TEXT_ALIGN = 2

[help]
HELP_BACKGROUND = ${colorVar(styles, "--item-color")}
HELP_BACKGROUND_ALPHA = 255
HELP_BORDER = ${colorVar(styles, "--item-border-color-active")}
HELP_BORDER_ALPHA = 255
HELP_CONTENT = ${colorVar(styles, "--text-color")}
HELP_TITLE = ${colorVar(styles, "--text-color")}
HELP_RADIUS = ${Math.round(height / 54)}

[dialogue]
DIALOGUE_BACKGROUND = ${colorVar(styles, "--item-color")}
DIALOGUE_BACKGROUND_ALPHA = 255
DIALOGUE_BORDER = ${colorVar(styles, "--item-border-color-active")}
DIALOGUE_BORDER_ALPHA = 255
DIALOGUE_TITLE = ${colorVar(styles, "--text-color")}
DIALOGUE_CONTENT = ${colorVar(styles, "--text-color")}
DIALOGUE_OPTION = ${colorVar(styles, "--text-color")}
DIALOGUE_DIM_ALPHA = 200
DIALOGUE_SELECTION = ${colorVar(styles, "--item-color-active")}
DIALOGUE_SELECTION_ALPHA = 255
DIALOGUE_RADIUS_MAIN = ${Math.round(height / 54)}
DIALOGUE_RADIUS_SELECTED = ${Math.round(height / 54)}
DIALOGUE_SHADOW_COLOUR = ${colorVar(styles, "--font-shadow-color")}
DIALOGUE_SHADOW_ALPHA = ${Math.round(255 * numberVar(styles, "--font-shadow-opacity"))}
DIALOGUE_SHADOW_X_OFFSET = ${Math.round(height / 240)}
DIALOGUE_SHADOW_Y_OFFSET = ${Math.round(height / 240)}
DIALOGUE_SHADOW_COLOUR_FOCUS = ${colorVar(styles, "--font-shadow-color")}
DIALOGUE_SHADOW_ALPHA_FOCUS = ${Math.round(255 * numberVar(styles, "--font-shadow-opacity"))}
DIALOGUE_SHADOW_X_OFFSET_FOCUS = ${Math.round(height / 240)}
DIALOGUE_SHADOW_Y_OFFSET_FOCUS = ${Math.round(height / 240)}

[navigation]
ALIGNMENT = 0
NAV_LR_GLYPH = ${colorVar(styles, "--text-color")}
NAV_LR_GLYPH_ALPHA = 255
NAV_LR_GLYPH_RECOLOUR_ALPHA = 255
NAV_LR_TEXT = ${colorVar(styles, "--text-color")}
NAV_LR_TEXT_ALPHA = 255
NAV_UD_GLYPH = ${colorVar(styles, "--text-color")}
NAV_UD_GLYPH_ALPHA = 255
NAV_UD_GLYPH_RECOLOUR_ALPHA = 255
NAV_UD_TEXT = ${colorVar(styles, "--text-color")}
NAV_UD_TEXT_ALPHA = 255
NAV_A_GLYPH = ${colorVar(styles, "--text-color")}
NAV_A_GLYPH_ALPHA = 255
NAV_A_GLYPH_RECOLOUR_ALPHA = 255
NAV_A_TEXT = ${colorVar(styles, "--text-color")}
NAV_A_TEXT_ALPHA = 255
NAV_B_GLYPH = ${colorVar(styles, "--text-color")}
NAV_B_GLYPH_ALPHA = 255
NAV_B_GLYPH_RECOLOUR_ALPHA = 255
NAV_B_TEXT = ${colorVar(styles, "--text-color")}
NAV_B_TEXT_ALPHA = 255
NAV_C_GLYPH = ${colorVar(styles, "--text-color")}
NAV_C_GLYPH_ALPHA = 255
NAV_C_GLYPH_RECOLOUR_ALPHA = 255
NAV_C_TEXT = ${colorVar(styles, "--text-color")}
NAV_C_TEXT_ALPHA = 255
NAV_X_GLYPH = ${colorVar(styles, "--text-color")}
NAV_X_GLYPH_ALPHA = 255
NAV_X_GLYPH_RECOLOUR_ALPHA = 255
NAV_X_TEXT = ${colorVar(styles, "--text-color")}
NAV_X_TEXT_ALPHA = 255
NAV_Y_GLYPH = ${colorVar(styles, "--text-color")}
NAV_Y_GLYPH_ALPHA = 255
NAV_Y_GLYPH_RECOLOUR_ALPHA = 255
NAV_Y_TEXT = ${colorVar(styles, "--text-color")}
NAV_Y_TEXT_ALPHA = 255
NAV_Z_GLYPH = ${colorVar(styles, "--text-color")}
NAV_Z_GLYPH_ALPHA = 255
NAV_Z_GLYPH_RECOLOUR_ALPHA = 255
NAV_Z_TEXT = ${colorVar(styles, "--text-color")}
NAV_Z_TEXT_ALPHA = 255
NAV_MENU_GLYPH = ${colorVar(styles, "--text-color")}
NAV_MENU_GLYPH_ALPHA = 255
NAV_MENU_GLYPH_RECOLOUR_ALPHA = 255
NAV_MENU_TEXT = ${colorVar(styles, "--text-color")}
NAV_MENU_TEXT_ALPHA = 255

[list]
LIST_DEFAULT_RADIUS = ${Math.round(height / 54)}
LIST_DEFAULT_BACKGROUND = ${colorVar(styles, "--item-color")}
LIST_DEFAULT_BACKGROUND_ALPHA = 255
LIST_DEFAULT_BORDER_WIDTH = ${pxVar(styles, "--item-border-width")}
LIST_DEFAULT_BORDER_SIDE = 15
LIST_DEFAULT_GRADIENT_START = 0
LIST_DEFAULT_GRADIENT_STOP = 0
LIST_DEFAULT_INDICATOR = ${colorVar(styles, "--item-border-color")}
LIST_DEFAULT_INDICATOR_ALPHA = 255
LIST_DEFAULT_TEXT = ${colorVar(styles, "--text-color")}
LIST_DEFAULT_TEXT_ALPHA = 255
LIST_DEFAULT_GLYPH_PAD_LEFT = ${Math.round(height / 19)}
LIST_DEFAULT_GLYPH_ALPHA = 255
LIST_DEFAULT_GLYPH_RECOLOUR = ${colorVar(styles, "--text-color")}
LIST_DEFAULT_GLYPH_RECOLOUR_ALPHA = 255
LIST_DEFAULT_SHADOW_COLOUR = ${colorVar(styles, "--font-shadow-color")}
LIST_DEFAULT_SHADOW_ALPHA = ${Math.round(255 * numberVar(styles, "--font-shadow-opacity"))}
LIST_DEFAULT_SHADOW_X_OFFSET = ${Math.round(height / 240)}
LIST_DEFAULT_SHADOW_Y_OFFSET = ${Math.round(height / 240)}
LIST_DISABLED_TEXT = ${colorVar(styles, "--text-color")}
LIST_DISABLED_TEXT_ALPHA = 128
LIST_FOCUS_BACKGROUND = ${colorVar(styles, "--item-color-active")}
LIST_FOCUS_BACKGROUND_ALPHA = 255
LIST_FOCUS_BORDER_WIDTH = ${pxVar(styles, "--item-border-width")}
LIST_FOCUS_BORDER_SIDE = 15
LIST_FOCUS_GRADIENT_START = 255
LIST_FOCUS_GRADIENT_STOP = 255
LIST_FOCUS_GRADIENT_DIRECTION = 0
LIST_FOCUS_INDICATOR = ${colorVar(styles, "--item-border-color-active")}
LIST_FOCUS_INDICATOR_ALPHA = 255
LIST_FOCUS_TEXT = ${colorVar(styles, "--text-color")}
LIST_FOCUS_TEXT_ALPHA = 255
LIST_FOCUS_GLYPH_ALPHA = 255
LIST_FOCUS_GLYPH_RECOLOUR = ${colorVar(styles, "--text-color")}
LIST_FOCUS_GLYPH_RECOLOUR_ALPHA = 255
LIST_FOCUS_SHADOW_COLOUR = ${colorVar(styles, "--font-shadow-color")}
LIST_FOCUS_SHADOW_ALPHA = ${Math.round(255 * numberVar(styles, "--font-shadow-opacity"))}
LIST_FOCUS_SHADOW_X_OFFSET = ${Math.round(height / 240)}
LIST_FOCUS_SHADOW_Y_OFFSET = ${Math.round(height / 240)}

[image_list]
IMAGE_LIST_ALPHA = 255
IMAGE_LIST_RADIUS = 3
IMAGE_LIST_RECOLOUR = F7E318
IMAGE_LIST_RECOLOUR_ALPHA = 0
IMAGE_PREVIEW_ALPHA = 255
IMAGE_PREVIEW_RADIUS = 3
IMAGE_PREVIEW_RECOLOUR = F7E318
IMAGE_PREVIEW_RECOLOUR_ALPHA = 0

[charging]
CHARGER_BACKGROUND = FFFFFF
CHARGER_BACKGROUND_ALPHA = 0
CHARGER_TEXT = ${colorVar(styles, "--text-color")}
CHARGER_TEXT_ALPHA = 255
CHARGER_Y_POS = ${Math.floor(height / 3)}

[verbose]
VERBOSE_BOOT_BACKGROUND = FFFFFF
VERBOSE_BOOT_BACKGROUND_ALPHA = 0
VERBOSE_BOOT_TEXT = ${colorVar(styles, "--text-color")}
VERBOSE_BOOT_TEXT_ALPHA = 255
VERBOSE_BOOT_Y_POS = ${Math.floor(height / 3)}

[keyboard]
OSK_BACKGROUND = ${colorVar(styles, "--item-color")}
OSK_BACKGROUND_ALPHA = 255
OSK_BORDER = ${colorVar(styles, "--item-border-color-active")}
OSK_BORDER_ALPHA = 255
OSK_RADIUS = ${Math.round(height / 54)}
OSK_TEXT = ${colorVar(styles, "--text-color")}
OSK_TEXT_ALPHA = 255
OSK_TEXT_FOCUS = ${colorVar(styles, "--text-color")}
OSK_TEXT_FOCUS_ALPHA = 255
OSK_ITEM_BACKGROUND = ${colorVar(styles, "--item-color")}
OSK_ITEM_BACKGROUND_ALPHA = 255
OSK_ITEM_BACKGROUND_FOCUS = ${colorVar(styles, "--item-color-active")}
OSK_ITEM_BACKGROUND_FOCUS_ALPHA = 255
OSK_ITEM_BORDER = ${colorVar(styles, "--item-border-color")}
OSK_ITEM_BORDER_ALPHA = 255
OSK_ITEM_BORDER_FOCUS = ${colorVar(styles, "--item-border-color-active")}
OSK_ITEM_BORDER_FOCUS_ALPHA = 255
OSK_ITEM_RADIUS = ${Math.round(height / 54)}
OSK_ITEM_SHADOW_COLOUR = ${colorVar(styles, "--font-shadow-color")}
OSK_ITEM_SHADOW_ALPHA = ${Math.round(255 * numberVar(styles, "--font-shadow-opacity"))}
OSK_ITEM_SHADOW_X_OFFSET = ${Math.round(height / 240)}
OSK_ITEM_SHADOW_Y_OFFSET = ${Math.round(height / 240)}
OSK_ITEM_SHADOW_COLOUR_FOCUS = ${colorVar(styles, "--font-shadow-color")}
OSK_ITEM_SHADOW_ALPHA_FOCUS = ${Math.round(255 * numberVar(styles, "--font-shadow-opacity"))}
OSK_ITEM_SHADOW_X_OFFSET_FOCUS = ${Math.round(height / 240)}
OSK_ITEM_SHADOW_Y_OFFSET_FOCUS = ${Math.round(height / 240)}

[notification]
MSG_BACKGROUND = ${colorVar(styles, "--item-color")}
MSG_BACKGROUND_ALPHA = 255
MSG_BORDER = ${colorVar(styles, "--item-border-color-active")}
MSG_BORDER_ALPHA = 255
MSG_RADIUS = ${Math.round(height / 54)}
MSG_TEXT = ${colorVar(styles, "--text-color")}
MSG_TEXT_ALPHA = 255

[bar]
BAR_BACKGROUND = ${colorVar(styles, "--item-color")}
BAR_BACKGROUND_ALPHA = 255
BAR_BORDER = ${colorVar(styles, "--item-border-color-active")}
BAR_BORDER_ALPHA = 255
BAR_RADIUS = ${Math.round(height / 54)}
BAR_PROGRESS_BACKGROUND = ${colorVar(styles, "--item-color")}
BAR_PROGRESS_BACKGROUND_ALPHA = 255
BAR_PROGRESS_ACTIVE_BACKGROUND = ${colorVar(styles, "--text-color")}
BAR_PROGRESS_ACTIVE_BACKGROUND_ALPHA = 255
BAR_PROGRESS_RADIUS = ${Math.round(height / 54)}
BAR_ICON = ${colorVar(styles, "--text-color")}
BAR_ICON_ALPHA = 255

[roll]
ROLL_TEXT = ${colorVar(styles, "--text-color")}
ROLL_TEXT_ALPHA = 255
ROLL_BACKGROUND = ${colorVar(styles, "--item-color")}
ROLL_BACKGROUND_ALPHA = 255
ROLL_RADIUS = ${Math.round(height / 54)}
ROLL_SELECT_TEXT = ${colorVar(styles, "--text-color")}
ROLL_SELECT_TEXT_ALPHA = 255
ROLL_SELECT_BACKGROUND = ${colorVar(styles, "--item-color-active")}
ROLL_SELECT_BACKGROUND_ALPHA = 255
ROLL_SELECT_RADIUS = ${Math.round(height / 54)}
ROLL_BORDER_COLOUR = ${colorVar(styles, "--item-border-color-active")}
ROLL_BORDER_ALPHA = 255
ROLL_BORDER_RADIUS = ${Math.round(height / 54)}

[counter]
COUNTER_ALIGNMENT = 2
COUNTER_PADDING_AROUND = ${Math.round(height / numberVar(styles, "--padding-divider"))}
COUNTER_PADDING_SIDE = 5
COUNTER_PADDING_TOP = ${
  Math.round(height / numberVar(styles, "--header-height-divider")) + 4
}
COUNTER_BORDER_COLOUR = ${colorVar(styles, "--item-border-color-active")}
COUNTER_BORDER_ALPHA = 255
COUNTER_BORDER_WIDTH = ${pxVar(styles, "--item-border-width") + 1}
COUNTER_RADIUS = ${Math.round(height / 54)}
COUNTER_BACKGROUND = ${colorVar(styles, "--item-color")}
COUNTER_BACKGROUND_ALPHA = 200
COUNTER_TEXT = ${colorVar(styles, "--text-color")}
COUNTER_TEXT_ALPHA = 255
COUNTER_TEXT_FADE_TIME = 24
COUNTER_TEXT_SEPARATOR =  / 

[meta]
META_CUT = 40

[misc]
STATIC_ALIGNMENT = 0
CONTENT_SIZE_TO_CONTENT = 0
CONTENT_ITEM_COUNT = 6
CONTENT_WIDTH = ${width - 2 * Math.round(height / numberVar(styles, "--padding-divider"))}
CONTENT_HEIGHT = ${
  height -
  2 * Math.round(height / pxVar(styles, "--header-height-divider")) -
  Math.round(height / numberVar(styles, "--padding-divider"))
}
CONTENT_ALIGNMENT = 0
CONTENT_PADDING_LEFT = ${Math.round(height / numberVar(styles, "--padding-divider"))}
CONTENT_PADDING_TOP = ${Math.round(height / numberVar(styles, "--padding-divider")) - 2}
ANIMATED_BACKGROUND = 0
NAVIGATION_TYPE = 0
`;
