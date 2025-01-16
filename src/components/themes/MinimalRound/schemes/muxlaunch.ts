import { Scheme } from "@/types";

export const muxlaunchScheme: Scheme = ({ width }) => `[background]
BACKGROUND=0F2027
BACKGROUND_ALPHA=0

[font]
FONT_HEADER_PAD_TOP=2
FONT_HEADER_PAD_BOTTOM=0
FONT_HEADER_ICON_PAD_TOP=0
FONT_HEADER_ICON_PAD_BOTTOM=0
FONT_FOOTER_PAD_TOP=0
FONT_FOOTER_PAD_BOTTOM=0
FONT_FOOTER_ICON_PAD_TOP=0
FONT_FOOTER_ICON_PAD_BOTTOM=0
FONT_MESSAGE_PAD_TOP=0
FONT_MESSAGE_PAD_BOTTOM=0
FONT_MESSAGE_ICON_PAD_TOP=0
FONT_MESSAGE_ICON_PAD_BOTTOM=0
FONT_LIST_PAD_TOP=0
FONT_LIST_PAD_BOTTOM=0
FONT_LIST_ICON_PAD_TOP=7
FONT_LIST_ICON_PAD_BOTTOM=0

[status]
PADDING_RIGHT=10

[battery]
BATTERY_NORMAL=DDDDDD
BATTERY_ACTIVE=85F718
BATTERY_LOW=D35C54
BATTERY_NORMAL_ALPHA=255
BATTERY_ACTIVE_ALPHA=255
BATTERY_LOW_ALPHA=255

[network]
NETWORK_NORMAL=DDDDDD
NETWORK_ACTIVE=DDDDDD
NETWORK_NORMAL_ALPHA=100
NETWORK_ACTIVE_ALPHA=255

[bluetooth]
BLUETOOTH_NORMAL=DDDDDD
BLUETOOTH_ACTIVE=DDDDDD
BLUETOOTH_NORMAL_ALPHA=100
BLUETOOTH_ACTIVE_ALPHA=255

[date]
DATETIME_ALIGN=1
DATETIME_TEXT=DDDDDD
DATETIME_ALPHA=255
PADDING_LEFT=10

[footer]
FOOTER_HEIGHT=42
FOOTER_BACKGROUND=0F2027
FOOTER_BACKGROUND_ALPHA=0
FOOTER_TEXT=DDDDDD
FOOTER_TEXT_ALPHA=255

[header]
HEADER_HEIGHT=42
HEADER_BACKGROUND=0F2027
HEADER_BACKGROUND_ALPHA=0
HEADER_TEXT=DDDDDD
HEADER_TEXT_ALPHA=0

[help]
HELP_BACKGROUND=0F2027
HELP_BACKGROUND_ALPHA=255
HELP_BORDER=2C5364
HELP_BORDER_ALPHA=255
HELP_CONTENT=DDDDDD
HELP_TITLE=DDDDDD
HELP_RADIUS=10

[navigation]
ALIGNMENT=0
NAV_A_GLYPH=F7E318
NAV_A_GLYPH_ALPHA=0
NAV_A_TEXT=FFFFFF
NAV_A_TEXT_ALPHA=0
NAV_B_GLYPH=F7E318
NAV_B_GLYPH_ALPHA=0
NAV_B_TEXT=FFFFFF
NAV_B_TEXT_ALPHA=0
NAV_C_GLYPH=F7E318
NAV_C_GLYPH_ALPHA=0
NAV_C_TEXT=FFFFFF
NAV_C_TEXT_ALPHA=0
NAV_X_GLYPH=F7E318
NAV_X_GLYPH_ALPHA=0
NAV_X_TEXT=FFFFFF
NAV_X_TEXT_ALPHA=0
NAV_Y_GLYPH=F7E318
NAV_Y_GLYPH_ALPHA=0
NAV_Y_TEXT=FFFFFF
NAV_Y_TEXT_ALPHA=0
NAV_Z_GLYPH=F7E318
NAV_Z_GLYPH_ALPHA=0
NAV_Z_TEXT=FFFFFF
NAV_Z_TEXT_ALPHA=0
NAV_MENU_GLYPH=F7E318
NAV_MENU_GLYPH_ALPHA=0
NAV_MENU_TEXT=FFFFFF
NAV_MENU_TEXT_ALPHA=0

[list]
LIST_DEFAULT_BACKGROUND=C69200
LIST_DEFAULT_BACKGROUND_ALPHA=0
LIST_DEFAULT_GRADIENT_START=0
LIST_DEFAULT_GRADIENT_STOP=255
LIST_DEFAULT_INDICATOR=A5B2B5
LIST_DEFAULT_INDICATOR_ALPHA=0
LIST_DEFAULT_TEXT=A5B2B5
LIST_DEFAULT_TEXT_ALPHA=0
LIST_DEFAULT_GLYPH_PAD_LEFT=19
LIST_DEFAULT_GLYPH_ALPHA=0
LIST_DEFAULT_GLYPH_RECOLOUR=FFFFFF
LIST_DEFAULT_GLYPH_RECOLOUR_ALPHA=255
LIST_DISABLED_TEXT=808080
LIST_DISABLED_TEXT_ALPHA=0
LIST_FOCUS_BACKGROUND=F7E318
LIST_FOCUS_BACKGROUND_ALPHA=0
LIST_FOCUS_GRADIENT_START=0
LIST_FOCUS_GRADIENT_STOP=200
LIST_FOCUS_INDICATOR=F7E318
LIST_FOCUS_INDICATOR_ALPHA=0
LIST_FOCUS_TEXT=F7E318
LIST_FOCUS_TEXT_ALPHA=0
LIST_FOCUS_GLYPH_ALPHA=0
LIST_FOCUS_GLYPH_RECOLOUR=0F2027
LIST_FOCUS_GLYPH_RECOLOUR_ALPHA=255

[image_list]
IMAGE_LIST_RADIUS=3
IMAGE_LIST_RECOLOUR=F7E318
IMAGE_LIST_RECOLOUR_ALPHA=0
IMAGE_PREVIEW_RADIUS=3
IMAGE_PREVIEW_RECOLOUR=F7E318
IMAGE_PREVIEW_RECOLOUR_ALPHA=0

[charging]
CHARGER_BACKGROUND=0F2027
CHARGER_BACKGROUND_ALPHA=50
CHARGER_TEXT=DDDDDD
CHARGER_TEXT_ALPHA=255
CHARGER_Y_POS=165

[verbose]
VERBOSE_BOOT_BACKGROUND=0F2027
VERBOSE_BOOT_BACKGROUND_ALPHA=50
VERBOSE_BOOT_TEXT=DDDDDD
VERBOSE_BOOT_TEXT_ALPHA=255
VERBOSE_BOOT_Y_POS=165

[keyboard]
OSK_BACKGROUND=0F2027
OSK_BACKGROUND_ALPHA=255
OSK_BORDER=0F2027
OSK_BORDER_ALPHA=255
OSK_RADIUS=3
OSK_TEXT=FFFFFF
OSK_TEXT_ALPHA=255
OSK_TEXT_FOCUS=0F2027
OSK_TEXT_FOCUS_ALPHA=255
OSK_ITEM_BACKGROUND=282525
OSK_ITEM_BACKGROUND_ALPHA=255
OSK_ITEM_BACKGROUND_FOCUS=F7E318
OSK_ITEM_BACKGROUND_FOCUS_ALPHA=255
OSK_ITEM_BORDER=F7E318
OSK_ITEM_BORDER_ALPHA=175
OSK_ITEM_BORDER_FOCUS=F7E318
OSK_ITEM_BORDER_FOCUS_ALPHA=255
OSK_ITEM_RADIUS=3

[notification]
MSG_BACKGROUND=0F2027
MSG_BACKGROUND_ALPHA=255
MSG_BORDER=0F2027
MSG_BORDER_ALPHA=255
MSG_RADIUS=3
MSG_TEXT=FFFFFF
MSG_TEXT_ALPHA=255

[bar]
BAR_BACKGROUND=0F2027
BAR_BACKGROUND_ALPHA=255
BAR_BORDER=0F2027
BAR_BORDER_ALPHA=255
BAR_RADIUS=3
BAR_PROGRESS_BACKGROUND=7E730C
BAR_PROGRESS_BACKGROUND_ALPHA=255
BAR_PROGRESS_ACTIVE_BACKGROUND=F7E318
BAR_PROGRESS_ACTIVE_BACKGROUND_ALPHA=255
BAR_PROGRESS_RADIUS=3
BAR_ICON=F7E318
BAR_ICON_ALPHA=255

[roll]
ROLL_TEXT=7E730C
ROLL_TEXT_ALPHA=175
ROLL_BACKGROUND=0F2027
ROLL_BACKGROUND_ALPHA=0
ROLL_RADIUS=3
ROLL_SELECT_TEXT=F7E318
ROLL_SELECT_TEXT_ALPHA=255
ROLL_SELECT_BACKGROUND=7E730C
ROLL_SELECT_BACKGROUND_ALPHA=175
ROLL_SELECT_RADIUS=3
ROLL_BORDER_COLOUR=0F2027
ROLL_BORDER_ALPHA=175
ROLL_BORDER_RADIUS=3

[counter]
COUNTER_ENABLED=1
COUNTER_ALIGNMENT=2
COUNTER_PADDING_AROUND=10
COUNTER_PADDING_SIDE=5
COUNTER_PADDING_TOP=50
COUNTER_BORDER_COLOUR=0F2027
COUNTER_BORDER_ALPHA=255
COUNTER_BORDER_WIDTH=2
COUNTER_RADIUS=3
COUNTER_BACKGROUND=0F2027
COUNTER_BACKGROUND_ALPHA=255
COUNTER_TEXT=FFFFFF
COUNTER_TEXT_ALPHA=255
COUNTER_TEXT_FADE_TIME=24
COUNTER_TEXT_SEPARATOR= of 

[meta]
META_CUT=40

[misc]
ANIMATED_BACKGROUND=0
CONTENT_PADDING_LEFT=0
CONTENT_WIDTH=640
NAVIGATION_TYPE=1
STATIC_ALIGNMENT=3
IMAGE_OVERLAY=0
[background]
BACKGROUND=0F2027
BACKGROUND_ALPHA=0

[font]
FONT_HEADER_PAD_TOP=2
FONT_HEADER_PAD_BOTTOM=0
FONT_HEADER_ICON_PAD_TOP=0
FONT_HEADER_ICON_PAD_BOTTOM=0
FONT_FOOTER_PAD_TOP=0
FONT_FOOTER_PAD_BOTTOM=0
FONT_FOOTER_ICON_PAD_TOP=0
FONT_FOOTER_ICON_PAD_BOTTOM=0
FONT_MESSAGE_PAD_TOP=0
FONT_MESSAGE_PAD_BOTTOM=0
FONT_MESSAGE_ICON_PAD_TOP=0
FONT_MESSAGE_ICON_PAD_BOTTOM=0
FONT_LIST_PAD_TOP=0
FONT_LIST_PAD_BOTTOM=0
FONT_LIST_ICON_PAD_TOP=7
FONT_LIST_ICON_PAD_BOTTOM=0

[status]
PADDING_RIGHT=10

[battery]
BATTERY_NORMAL=DDDDDD
BATTERY_ACTIVE=85F718
BATTERY_LOW=D35C54
BATTERY_NORMAL_ALPHA=255
BATTERY_ACTIVE_ALPHA=255
BATTERY_LOW_ALPHA=255

[network]
NETWORK_NORMAL=DDDDDD
NETWORK_ACTIVE=DDDDDD
NETWORK_NORMAL_ALPHA=100
NETWORK_ACTIVE_ALPHA=255

[bluetooth]
BLUETOOTH_NORMAL=DDDDDD
BLUETOOTH_ACTIVE=DDDDDD
BLUETOOTH_NORMAL_ALPHA=100
BLUETOOTH_ACTIVE_ALPHA=255

[date]
DATETIME_ALIGN=1
DATETIME_TEXT=DDDDDD
DATETIME_ALPHA=255
PADDING_LEFT=10

[footer]
FOOTER_HEIGHT=42
FOOTER_BACKGROUND=0F2027
FOOTER_BACKGROUND_ALPHA=0
FOOTER_TEXT=DDDDDD
FOOTER_TEXT_ALPHA=255

[header]
HEADER_HEIGHT=42
HEADER_BACKGROUND=0F2027
HEADER_BACKGROUND_ALPHA=0
HEADER_TEXT=DDDDDD
HEADER_TEXT_ALPHA=0

[help]
HELP_BACKGROUND=0F2027
HELP_BACKGROUND_ALPHA=255
HELP_BORDER=2C5364
HELP_BORDER_ALPHA=255
HELP_CONTENT=DDDDDD
HELP_TITLE=DDDDDD
HELP_RADIUS=10

[navigation]
ALIGNMENT=0
NAV_A_GLYPH=F7E318
NAV_A_GLYPH_ALPHA=0
NAV_A_TEXT=FFFFFF
NAV_A_TEXT_ALPHA=0
NAV_B_GLYPH=F7E318
NAV_B_GLYPH_ALPHA=0
NAV_B_TEXT=FFFFFF
NAV_B_TEXT_ALPHA=0
NAV_C_GLYPH=F7E318
NAV_C_GLYPH_ALPHA=0
NAV_C_TEXT=FFFFFF
NAV_C_TEXT_ALPHA=0
NAV_X_GLYPH=F7E318
NAV_X_GLYPH_ALPHA=0
NAV_X_TEXT=FFFFFF
NAV_X_TEXT_ALPHA=0
NAV_Y_GLYPH=F7E318
NAV_Y_GLYPH_ALPHA=0
NAV_Y_TEXT=FFFFFF
NAV_Y_TEXT_ALPHA=0
NAV_Z_GLYPH=F7E318
NAV_Z_GLYPH_ALPHA=0
NAV_Z_TEXT=FFFFFF
NAV_Z_TEXT_ALPHA=0
NAV_MENU_GLYPH=F7E318
NAV_MENU_GLYPH_ALPHA=0
NAV_MENU_TEXT=FFFFFF
NAV_MENU_TEXT_ALPHA=0

[list]
LIST_DEFAULT_BACKGROUND=C69200
LIST_DEFAULT_BACKGROUND_ALPHA=0
LIST_DEFAULT_GRADIENT_START=0
LIST_DEFAULT_GRADIENT_STOP=255
LIST_DEFAULT_INDICATOR=A5B2B5
LIST_DEFAULT_INDICATOR_ALPHA=0
LIST_DEFAULT_TEXT=A5B2B5
LIST_DEFAULT_TEXT_ALPHA=0
LIST_DEFAULT_GLYPH_PAD_LEFT=19
LIST_DEFAULT_GLYPH_ALPHA=0
LIST_DEFAULT_GLYPH_RECOLOUR=FFFFFF
LIST_DEFAULT_GLYPH_RECOLOUR_ALPHA=255
LIST_DISABLED_TEXT=808080
LIST_DISABLED_TEXT_ALPHA=0
LIST_FOCUS_BACKGROUND=F7E318
LIST_FOCUS_BACKGROUND_ALPHA=0
LIST_FOCUS_GRADIENT_START=0
LIST_FOCUS_GRADIENT_STOP=200
LIST_FOCUS_INDICATOR=F7E318
LIST_FOCUS_INDICATOR_ALPHA=0
LIST_FOCUS_TEXT=F7E318
LIST_FOCUS_TEXT_ALPHA=0
LIST_FOCUS_GLYPH_ALPHA=0
LIST_FOCUS_GLYPH_RECOLOUR=0F2027
LIST_FOCUS_GLYPH_RECOLOUR_ALPHA=255

[image_list]
IMAGE_LIST_RADIUS=3
IMAGE_LIST_RECOLOUR=F7E318
IMAGE_LIST_RECOLOUR_ALPHA=0
IMAGE_PREVIEW_RADIUS=3
IMAGE_PREVIEW_RECOLOUR=F7E318
IMAGE_PREVIEW_RECOLOUR_ALPHA=0

[charging]
CHARGER_BACKGROUND=0F2027
CHARGER_BACKGROUND_ALPHA=50
CHARGER_TEXT=DDDDDD
CHARGER_TEXT_ALPHA=255
CHARGER_Y_POS=165

[verbose]
VERBOSE_BOOT_BACKGROUND=0F2027
VERBOSE_BOOT_BACKGROUND_ALPHA=50
VERBOSE_BOOT_TEXT=DDDDDD
VERBOSE_BOOT_TEXT_ALPHA=255
VERBOSE_BOOT_Y_POS=165

[keyboard]
OSK_BACKGROUND=0F2027
OSK_BACKGROUND_ALPHA=255
OSK_BORDER=0F2027
OSK_BORDER_ALPHA=255
OSK_RADIUS=3
OSK_TEXT=FFFFFF
OSK_TEXT_ALPHA=255
OSK_TEXT_FOCUS=0F2027
OSK_TEXT_FOCUS_ALPHA=255
OSK_ITEM_BACKGROUND=282525
OSK_ITEM_BACKGROUND_ALPHA=255
OSK_ITEM_BACKGROUND_FOCUS=F7E318
OSK_ITEM_BACKGROUND_FOCUS_ALPHA=255
OSK_ITEM_BORDER=F7E318
OSK_ITEM_BORDER_ALPHA=175
OSK_ITEM_BORDER_FOCUS=F7E318
OSK_ITEM_BORDER_FOCUS_ALPHA=255
OSK_ITEM_RADIUS=3

[notification]
MSG_BACKGROUND=0F2027
MSG_BACKGROUND_ALPHA=255
MSG_BORDER=0F2027
MSG_BORDER_ALPHA=255
MSG_RADIUS=3
MSG_TEXT=FFFFFF
MSG_TEXT_ALPHA=255

[bar]
BAR_BACKGROUND=0F2027
BAR_BACKGROUND_ALPHA=255
BAR_BORDER=0F2027
BAR_BORDER_ALPHA=255
BAR_RADIUS=3
BAR_PROGRESS_BACKGROUND=7E730C
BAR_PROGRESS_BACKGROUND_ALPHA=255
BAR_PROGRESS_ACTIVE_BACKGROUND=F7E318
BAR_PROGRESS_ACTIVE_BACKGROUND_ALPHA=255
BAR_PROGRESS_RADIUS=3
BAR_ICON=F7E318
BAR_ICON_ALPHA=255

[roll]
ROLL_TEXT=7E730C
ROLL_TEXT_ALPHA=175
ROLL_BACKGROUND=0F2027
ROLL_BACKGROUND_ALPHA=0
ROLL_RADIUS=3
ROLL_SELECT_TEXT=F7E318
ROLL_SELECT_TEXT_ALPHA=255
ROLL_SELECT_BACKGROUND=7E730C
ROLL_SELECT_BACKGROUND_ALPHA=175
ROLL_SELECT_RADIUS=3
ROLL_BORDER_COLOUR=0F2027
ROLL_BORDER_ALPHA=175
ROLL_BORDER_RADIUS=3

[counter]
COUNTER_ENABLED=1
COUNTER_ALIGNMENT=2
COUNTER_PADDING_AROUND=10
COUNTER_PADDING_SIDE=5
COUNTER_PADDING_TOP=50
COUNTER_BORDER_COLOUR=0F2027
COUNTER_BORDER_ALPHA=255
COUNTER_BORDER_WIDTH=2
COUNTER_RADIUS=3
COUNTER_BACKGROUND=0F2027
COUNTER_BACKGROUND_ALPHA=255
COUNTER_TEXT=FFFFFF
COUNTER_TEXT_ALPHA=255
COUNTER_TEXT_FADE_TIME=24
COUNTER_TEXT_SEPARATOR= of 

[meta]
META_CUT=40

[misc]
ANIMATED_BACKGROUND=0
CONTENT_PADDING_LEFT=0
CONTENT_WIDTH=${width}
NAVIGATION_TYPE=1
STATIC_ALIGNMENT=3
IMAGE_OVERLAY=0
`;
