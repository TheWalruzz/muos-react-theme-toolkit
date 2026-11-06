import { numberVar, type Scheme } from "@mustardos-react-ttk/core";

export const muxlaunchLayout: Scheme = ({ width, height }, styles) => {
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
  const xStart = 0;
  const yStart = 0;
  const xSmallStart = width - 5.5 * gap - 4 * smallItemSize;
  const ySmallStart = 2.5 * gap + bigItemHeight;

  return `{
  "mode": "items",
  "items": {
    "explore": {
      "x": ${xStart},
      "y": ${yStart},
      "w": ${bigItemWidth},
      "h": ${bigItemHeight}
    },
    "collection": {
      "x": ${xStart + bigItemWidth + gap},
      "y": ${yStart},
      "w": ${bigItemWidth},
      "h": ${bigItemHeight}
    },
    "history": {
      "x": ${xStart + 2 * bigItemWidth + 2 * gap},
      "y": ${yStart},
      "w": ${bigItemWidth},
      "h": ${bigItemHeight}
    },
    "apps": {
      "x": ${xStart + 3 * bigItemWidth + 3 * gap},
      "y": ${yStart},
      "w": ${bigItemWidth},
      "h": ${bigItemHeight}
    },
    "info": {
      "x": ${xSmallStart},
      "y": ${ySmallStart},
      "w": ${smallItemSize},
      "h": ${smallItemSize},
      "radius": ${smallItemRadius},
      "label": "none",
      "glyph": ${smallItemGlyphSize}
    },
    "config": {
      "x": ${xSmallStart + gap + smallItemSize},
      "y": ${ySmallStart},
      "w": ${smallItemSize},
      "h": ${smallItemSize},
      "radius": ${smallItemRadius},
      "label": "none",
      "glyph": ${smallItemGlyphSize}
    },
    "reboot": {
      "x": ${xSmallStart + 2 * gap + 2 * smallItemSize},
      "y": ${ySmallStart},
      "w": ${smallItemSize},
      "h": ${smallItemSize},
      "radius": ${smallItemRadius},
      "label": "none",
      "glyph": ${smallItemGlyphSize}
    },
    "shutdown": {
      "x": ${xSmallStart + 3 * gap + 3 * smallItemSize},
      "y": ${ySmallStart},
      "w": ${smallItemSize},
      "h": ${smallItemSize},
      "radius": ${smallItemRadius},
      "label": "none",
      "glyph": ${smallItemGlyphSize}
    }
  }
}`;
};
