import {
  colorVar,
  numberVar,
  pxVar,
  type Template,
  type Styles,
} from "@mustardos-react-ttk/core";

const color = (styles: Styles | undefined, key: `--${string}`) =>
  `#${colorVar(styles, key)}`;

const buildMuxploreTemplate = (
  width: number,
  height: number,
  styles: Styles | undefined,
  carousel = false,
) => {
  const padding = Math.round(height / numberVar(styles, "--padding-divider"));
  const header = Math.round(
    height / numberVar(styles, "--header-height-divider"),
  );
  const gap = Math.round(height / numberVar(styles, "--item-grid-gap-divider"));
  const columnCount = carousel ? 1 : 4;
  const rowCount = carousel ? 3 : 2;

  return {
    grid: {
      navigation_type: 2,
      background_alpha: 0,
      column: {
        count: columnCount,
        width: carousel
          ? width
          : Math.round((width - padding) / columnCount),
      },
      row: {
        count: rowCount,
        height: Math.round((height - 2 * header) / rowCount),
      },
      location: {
        x: padding,
        y: header + padding,
      },
      current: {
        item: {
          label: {
            text_alpha: 0,
          },
        },
      },
      cell: {
        width: carousel
          ? width - 2 * padding
          : Math.round((width - 2 * padding - 3 * gap) / 4),
        height: Math.round((height - 2 * header - 2 * gap) / rowCount),
        radius: Math.round(height / 54),
        image_padding_top: 0,
        text: {
          padding: {
            bottom: 0,
          },
        },
        column_align: 0,
        row_align: 0,
        border_width: 1,
        shadow: color(styles, "--fake-shadow-color"),
        shadow_x_offset: 0,
        shadow_y_offset: Math.round(height / 240),
        shadow_width: Math.round(height / 120),
        default: {
          background: color(styles, "--item-color"),
          background_alpha: 255,
          border: color(styles, "--item-border-color"),
          border_alpha: 255,
          image: {
            alpha: 255,
            recolour: color(styles, "--text-color"),
            recolour_alpha: 255,
          },
          text: color(styles, "--text-color"),
          text_alpha: 0,
        },
        focus: {
          background: color(styles, "--item-color-active"),
          background_alpha: 255,
          border: color(styles, "--item-border-color-active"),
          border_alpha: 255,
          image: {
            recolour: color(styles, "--text-color"),
            recolour_alpha: 255,
          },
          text: color(styles, "--text-color"),
          text_alpha: 0,
        },
        animation_time: 250,
      },
    },
    list: {
      default: {
        label_long_mode: 1,
      },
    },
    misc: {
      content: {
        width: Math.round(width / 2 - padding),
      },
      navigation_type: 0,
    },
  };
};

const buildGridModule = (
  width: number,
  height: number,
  styles: Styles | undefined,
  kind: "app" | "collect",
) => {
  const padding = Math.round(height / numberVar(styles, "--padding-divider"));
  const header = Math.round(
    height / numberVar(styles, "--header-height-divider"),
  );
  const gap = Math.round(height / numberVar(styles, "--item-grid-gap-divider"));
  const cellWidth = Math.round((width - 2 * padding - 3 * gap) / 4);
  const cellHeight = Math.round((height - 2 * header - 2 * gap) / 2);
  const collectTextPaddingBottom =
    Math.round((height - 2 * header - 2 * gap) / 4) - 2 * padding;
  const isCollect = kind === "collect";

  return {
    ...(kind === "app" ? { glyph: { grid: Math.round(height / 7) } } : {}),
    grid: {
      navigation_type: 2,
      background_alpha: 0,
      column: {
        count: 4,
        width: Math.round((width - padding) / 4),
      },
      row: {
        count: 2,
        height: Math.round((height - 2 * header) / 2),
      },
      location: {
        x: padding,
        y: header + padding,
      },
      current: { item: { label: { text_alpha: 0 } } },
      cell: {
        width: cellWidth,
        height: cellHeight,
        radius: Math.round(height / 54),
        image_padding_top: isCollect ? 0 : Math.round(height / 15),
        text: {
          padding: {
            bottom: isCollect
              ? collectTextPaddingBottom
              : Math.round(height / 15),
          },
        },
        column_align: 0,
        row_align: 0,
        border_width: 1,
        shadow: color(styles, "--fake-shadow-color"),
        shadow_x_offset: 0,
        shadow_y_offset: Math.round(height / 240),
        shadow_width: Math.round(height / 120),
        default: {
          background: color(styles, "--item-color"),
          background_alpha: 255,
          border: color(styles, "--item-border-color"),
          border_alpha: 255,
          image: isCollect
            ? { alpha: 0 }
            : {
                alpha: 255,
                recolour: color(styles, "--text-color"),
                recolour_alpha: 255,
              },
          text: color(styles, "--text-color"),
          text_alpha: 255,
        },
        focus: {
          background: color(styles, "--item-color-active"),
          background_alpha: 255,
          border: color(styles, "--item-border-color-active"),
          border_alpha: 255,
          image: isCollect
            ? { alpha: 0 }
            : {
                recolour: color(styles, "--text-color"),
                recolour_alpha: 255,
              },
          text: color(styles, "--text-color"),
          text_alpha: 255,
        },
        animation_time: 250,
      },
    },
    list: {
      default: {
        label_long_mode: 1,
      },
    },
    misc: {
      content: {
        width: Math.round(width / 2 - padding),
      },
      navigation_type: 0,
    },
  };
};

const buildMuxlaunchTemplate = (
  width: number,
  height: number,
  styles: Styles | undefined,
) => {
  const padding = Math.round(height / numberVar(styles, "--padding-divider"));
  const header = Math.round(
    height / numberVar(styles, "--header-height-divider"),
  );
  const gap = Math.round(height / numberVar(styles, "--item-grid-gap-divider"));
  const glyphSize = Math.round((height / 7) * (width === height ? 0.9 : 1));
  const bigItemHeight =
    height -
    header -
    3 * gap -
    Math.round(height / 6.5);
  const shadow = color(styles, "--fake-shadow-color");
  const text = color(styles, "--text-color");

  return {
    glyph: { grid: glyphSize },
    grid: {
      navigation_type: 2,
      background_alpha: 0,
      column: { count: 4 },
      row: { count: 2 },
      location: { x: padding, y: header + padding },
      current: { item: { label: { text_alpha: 0 } } },
      cell: {
        radius: Math.round(height / 108),
        image_padding_top: Math.round(bigItemHeight / 2) - glyphSize,
        text: {
          padding: {
            bottom:
              Math.round(bigItemHeight / 2) - Math.round(glyphSize * 0.75),
          },
        },
        border_width: 1,
        shadow,
        shadow_x_offset: 0,
        shadow_y_offset: Math.round(height / 240),
        shadow_width: Math.round(height / 120),
        default: {
          background: color(styles, "--item-color"),
          background_alpha: 255,
          border: color(styles, "--item-border-color"),
          border_alpha: 255,
          image: {
            alpha: 255,
            recolour: text,
            recolour_alpha: 255,
          },
          text,
          text_alpha: 255,
        },
        focus: {
          background: color(styles, "--item-color-active"),
          background_alpha: 255,
          border: color(styles, "--item-border-color-active"),
          border_alpha: 255,
          image: {
            alpha: 255,
            recolour: text,
            recolour_alpha: 255,
          },
          text,
          text_alpha: 255,
        },
        animation_time: 250,
      },
    },
    misc: {
      content: { padding: { left: 0 }, width },
      static_alignment: 3,
    },
  };
};

const buildMuxlaunchLayout = (
  width: number,
  height: number,
  styles: Styles | undefined,
) => {
  const gap = Math.round(height / numberVar(styles, "--item-grid-gap-divider"));
  const smallItemRadius = Math.round(height / 108);
  const bigItemWidth = Math.round((width - 5 * gap) / 4);
  const bigItemHeight =
    height -
    Math.round(height / numberVar(styles, "--header-height-divider")) -
    3 * gap -
    Math.round(height / 6.5);
  const smallItemGlyphSize = Math.round(height / 15);
  const smallItemSize = smallItemGlyphSize + 2 * Math.round(height / 48);
  const xSmallStart = width - 6.25 * gap - 4 * smallItemSize;
  const ySmallStart = 2.375 * gap + bigItemHeight;
  const smallItem = (index: number) => ({
    x: xSmallStart + index * (gap + smallItemSize),
    y: ySmallStart,
    w: smallItemSize,
    h: smallItemSize,
    radius: smallItemRadius,
    label: "none",
    glyph: smallItemGlyphSize,
    shadow: 0,
    border: 0,
  });

  return {
    mode: "items",
    items: {
      explore: { x: 0, y: 0, w: bigItemWidth, h: bigItemHeight },
      collection: { x: bigItemWidth + gap, y: 0, w: bigItemWidth, h: bigItemHeight },
      history: { x: 2 * bigItemWidth + 2 * gap, y: 0, w: bigItemWidth, h: bigItemHeight },
      apps: { x: 3 * bigItemWidth + 3 * gap, y: 0, w: bigItemWidth, h: bigItemHeight },
      info: smallItem(0),
      config: smallItem(1),
      reboot: smallItem(2),
      shutdown: smallItem(3),
    },
  };
};

export const themeJsonTemplate: Template = ({ width, height }, styles) => {
  const headerHeight = Math.round(
    height / pxVar(styles, "--header-height-divider"),
  );
  const pad = Math.round(height / numberVar(styles, "--padding-divider"));
  const shadowAlpha = Math.round(
    255 * numberVar(styles, "--font-shadow-opacity"),
  );
  const shadowColor = color(styles, "--font-shadow-color");
  const textColor = color(styles, "--text-color");
  const itemColor = color(styles, "--item-color");
  const itemActiveColor = color(styles, "--item-color-active");
  const itemBorderColor = color(styles, "--item-border-color");
  const itemActiveBorderColor = color(styles, "--item-border-color-active");
  const shadowOffset = Math.round(height / 240);
  const radius = Math.round(height / 54);

  return JSON.stringify(
    {
      scheme: {
        background: {
          background: color(styles, "--background"),
          alpha: 255,
        },
        font: {
          list: {
            size: Math.round(height / 24),
            pad: {
              left: Math.round(height / 38),
              right: Math.round(height / 38),
              top: 0,
              bottom: 0,
            },
            icon: {
              pad: { top: 0, bottom: 0 },
            },
          },
          header: {
            size: Math.round(height / 24) - 1,
            pad: { top: 2, bottom: 0 },
            icon: {
              pad: { top: 0, bottom: 0 },
            },
          },
          footer: {
            size: Math.round(height / 24),
            pad: { top: 0, bottom: 0 },
            icon: {
              pad: { top: 0, bottom: 0 },
            },
          },
          panel_size: Math.round(height / 24),
          message: {
            pad: { top: 0, bottom: 0 },
            icon: {
              pad: { top: 0, bottom: 0 },
            },
          },
        },
        glyph: {
          list: Math.round(height / 17),
          footer: Math.round(height / 17),
          header: Math.round(height / 10),
          grid: 0,
        },
        status: {
          padding: { right: Math.round(height / 38) },
          align: 1,
        },
        battery: {
          normal: textColor,
          active: "#86d72f",
          low: "#f8312f",
          normal_alpha: 255,
          active_alpha: 255,
          low_alpha: 255,
        },
        network: {
          normal: textColor,
          active: textColor,
          normal_alpha: 255,
          active_alpha: 255,
        },
        bluetooth: {
          normal: textColor,
          active: textColor,
          normal_alpha: 255,
          active_alpha: 255,
        },
        date: {
          align: 1,
          text: textColor,
          alpha: 255,
          padding: { left: Math.round(height / 38) },
        },
        footer: {
          height: headerHeight,
          background: "#ffffff",
          background_alpha: 0,
          text: textColor,
          text_alpha: 255,
        },
        header: {
          height: headerHeight,
          background: "#ffffff",
          background_alpha: 0,
          text: textColor,
          text_alpha: 255,
          text_align: 2,
        },
        help: {
          background: itemColor,
          background_alpha: 255,
          border: itemActiveBorderColor,
          border_alpha: 255,
          content: textColor,
          title: textColor,
          radius,
        },
        dialogue: {
          background: itemColor,
          background_alpha: 255,
          border: itemActiveBorderColor,
          border_alpha: 255,
          title: textColor,
          content: textColor,
          option: textColor,
          dim_alpha: 200,
          selection: itemActiveColor,
          selection_alpha: 255,
          radius: { main: radius, selected: radius },
          shadow: {
            colour: shadowColor,
            alpha: shadowAlpha,
            x: { offset: shadowOffset, offset_focus: shadowOffset },
            y: { offset: shadowOffset, offset_focus: shadowOffset },
            colour_focus: shadowColor,
            alpha_focus: shadowAlpha,
          },
        },
        navigation: {
          alignment: 0,
          lr: {
            glyph: textColor,
            glyph_alpha: 255,
            glyph_recolour_alpha: 255,
            text: textColor,
            text_alpha: 255,
          },
          ud: {
            glyph: textColor,
            glyph_alpha: 255,
            glyph_recolour_alpha: 255,
            text: textColor,
            text_alpha: 255,
          },
          a: {
            glyph: textColor,
            glyph_alpha: 255,
            glyph_recolour_alpha: 255,
            text: textColor,
            text_alpha: 255,
          },
          b: {
            glyph: textColor,
            glyph_alpha: 255,
            glyph_recolour_alpha: 255,
            text: textColor,
            text_alpha: 255,
          },
          c: {
            glyph: textColor,
            glyph_alpha: 255,
            glyph_recolour_alpha: 255,
            text: textColor,
            text_alpha: 255,
          },
          x: {
            glyph: textColor,
            glyph_alpha: 255,
            glyph_recolour_alpha: 255,
            text: textColor,
            text_alpha: 255,
          },
          y: {
            glyph: textColor,
            glyph_alpha: 255,
            glyph_recolour_alpha: 255,
            text: textColor,
            text_alpha: 255,
          },
          z: {
            glyph: textColor,
            glyph_alpha: 255,
            glyph_recolour_alpha: 255,
            text: textColor,
            text_alpha: 255,
          },
          menu: {
            glyph: textColor,
            glyph_alpha: 255,
            glyph_recolour_alpha: 255,
            text: textColor,
            text_alpha: 255,
          },
        },
        list: {
          default: {
            radius,
            background: itemColor,
            background_alpha: 255,
            gradient: { start: 0, stop: 0 },
            indicator: itemBorderColor,
            indicator_alpha: 255,
            text: textColor,
            text_alpha: 255,
            glyph: {
              pad: { left: Math.round(height / 38) },
              alpha: 255,
              recolour: textColor,
              recolour_alpha: 255,
            },
            border: { width: 1, side: 15 },
            shadow: {
              colour: shadowColor,
              alpha: shadowAlpha,
              x_offset: shadowOffset,
              y_offset: shadowOffset,
            },
          },
          disabled: { text: textColor, text_alpha: 128 },
          focus: {
            background: itemActiveColor,
            background_alpha: 255,
            gradient: { start: 255, stop: 255, direction: 0 },
            indicator: itemActiveBorderColor,
            indicator_alpha: 255,
            text: textColor,
            text_alpha: 255,
            glyph: {
              alpha: 255,
              recolour: textColor,
              recolour_alpha: 255,
            },
            border: { width: 1, side: 15 },
            shadow: {
              colour: shadowColor,
              alpha: shadowAlpha,
              x_offset: shadowOffset,
              y_offset: shadowOffset,
            },
          },
        },
        image_list: {
          alpha: 255,
          radius: 3,
          recolour: "#f7e318",
          recolour_alpha: 0,
          image: {
            preview: {
              alpha: 255,
              radius: 3,
              recolour: "#f7e318",
              recolour_alpha: 0,
            },
          },
        },
        charging: {
          background: "#ffffff",
          background_alpha: 0,
          text: textColor,
          text_alpha: 255,
          y_pos: Math.floor(height / 3),
        },
        verbose: {
          boot: {
            background: "#ffffff",
            background_alpha: 0,
            text: textColor,
            text_alpha: 255,
            y_pos: Math.floor(height / 3),
          },
        },
        keyboard: {
          background: itemColor,
          background_alpha: 255,
          border: itemActiveBorderColor,
          border_alpha: 255,
          radius,
          text: textColor,
          text_alpha: 255,
          text_focus: textColor,
          text_focus_alpha: 255,
          item: {
            background: itemColor,
            background_alpha: 255,
            background_focus: itemActiveColor,
            background_focus_alpha: 255,
            border: itemBorderColor,
            border_alpha: 255,
            border_focus: itemActiveBorderColor,
            border_focus_alpha: 255,
            radius,
            shadow: {
              colour: shadowColor,
              alpha: shadowAlpha,
              x: { offset: shadowOffset, offset_focus: shadowOffset },
              y: { offset: shadowOffset, offset_focus: shadowOffset },
              colour_focus: shadowColor,
              alpha_focus: shadowAlpha,
            },
          },
        },
        notification: {
          background: itemColor,
          background_alpha: 255,
          border: itemActiveBorderColor,
          border_alpha: 255,
          radius,
          text: textColor,
          text_alpha: 255,
        },
        bar: {
          background: itemColor,
          background_alpha: 255,
          border: itemActiveBorderColor,
          border_alpha: 255,
          radius,
          progress: {
            background: itemColor,
            background_alpha: 255,
            active: {
              background: textColor,
              background_alpha: 255,
            },
            radius,
          },
          icon: textColor,
          icon_alpha: 255,
        },
        roll: {
          text: textColor,
          text_alpha: 255,
          background: itemColor,
          background_alpha: 255,
          radius,
          select: {
            text: textColor,
            text_alpha: 255,
            background: itemActiveColor,
            background_alpha: 255,
            radius,
          },
          border: {
            colour: itemActiveBorderColor,
            alpha: 255,
            radius,
          },
        },
        counter: {
          alignment: 2,
          padding: {
            around: pad,
            side: 5,
            top: headerHeight + 4,
          },
          border: {
            colour: itemActiveBorderColor,
            alpha: 255,
            width: pxVar(styles, "--item-border-width") + 1,
          },
          radius,
          background: itemColor,
          background_alpha: 200,
          text: textColor,
          text_alpha: 255,
          text_fade_time: 24,
          text_separator: " / ",
        },
        meta: { META_CUT: 40 },
        misc: {
          static_alignment: 0,
          content: {
            item: { count: 6 },
            size_to_content: 0,
            width: width - 2 * pad,
            height:
              height -
              2 * Math.round(height / pxVar(styles, "--header-height-divider")) -
              pad,
            alignment: 0,
            padding: { left: pad, top: pad - 2 },
          },
          animated_background: 0,
          navigation_type: 0,
          peek_opacity: 200,
        },
      },
      modules: {
        muxactivity: {
          scheme: {
            list: { default: { label_long_mode: 1 } },
            misc: {
              content: {
                width: Math.round(width / 2 - pad),
              },
            },
          },
        },
        muxapp: {
          scheme: buildGridModule(width, height, styles, "app"),
        },
        muxcollect: {
          scheme: buildGridModule(width, height, styles, "collect"),
        },
        muxhistory: {
          scheme: {
            list: { default: { label_long_mode: 1 } },
            misc: {
              content: {
                width: Math.round(width / 2 - pad),
              },
            },
          },
        },
        muxlaunch: {
          scheme: buildMuxlaunchTemplate(width, height, styles),
          layout: buildMuxlaunchLayout(width, height, styles),
        },
        muxplore: {
          scheme: buildMuxploreTemplate(width, height, styles),
        },
      },
    },
    null,
    2,
  );
};

export const muxploreCarouselThemeJsonTemplate: Template = (
  { width, height },
  styles,
) =>
  JSON.stringify(
    {
      modules: {
        muxplore: {
          scheme: buildMuxploreTemplate(width, height, styles, true),
        },
      },
    },
    null,
    2,
  );
