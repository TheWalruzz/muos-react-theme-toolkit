import { Resolution, ThemeConfig } from "@/types";
import { extend } from "@/utils/extend";
import { MenuItem } from "./MenuItem";

import "./index.css";

const systemIcons: Record<string, string> = import.meta.glob(
  "./systems/**/*.png",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const appIcons: Record<string, string> = import.meta.glob("./apps/**/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});

export const minimalRoundGridIcons: ThemeConfig = {
  name: "Minimal Round Grid Icons",
  outputType: "muxzip",
  author: "TheWalruzz",
  screens: [
    // generate system icons in set resolution
    ...Object.keys(systemIcons).flatMap((system) => [
      {
        path: system.replace(/^.\/systems\//, ""),
        pathPrefix: "catalogue/Folder/grid/",
        overrideResolution: ({ width }: Resolution) => ({
          width: Math.floor(width / 7) + 56,
          height: Math.floor(width / 7) + 56,
        }),
        render: () => (
          <div
            style={{
              width: "100%",
              height: "100%",
              padding: "28px 28px 28px 28px",
            }}
          >
            <MenuItem
              icon={
                <img
                  src={systemIcons[system]}
                  style={{ maxWidth: "75%", maxHeight: "75%" }}
                />
              }
              active={false}
            />
          </div>
        ),
      },
      {
        path: system
          .replace(/^.\/systems\//, "")
          .replace(/\.png$/, "_focused.png"),
        pathPrefix: "catalogue/Folder/grid/",
        overrideResolution: ({ width }: Resolution) => ({
          width: Math.floor(width / 7) + 56,
          height: Math.floor(width / 7) + 56,
        }),
        render: () => (
          <div
            style={{
              width: "100%",
              height: "100%",
              padding: "28px 28px 28px 28px",
            }}
          >
            <MenuItem
              icon={
                <img
                  src={systemIcons[system]}
                  style={{ maxWidth: "75%", maxHeight: "75%" }}
                />
              }
              active
            />
          </div>
        ),
      },
    ]),
    ...Object.keys(appIcons).flatMap((app) => [
      {
        path: app.replace(/^.\/apps\//, ""),
        pathPrefix: "catalogue/Application/grid/",
        overrideResolution: ({ width }: Resolution) => ({
          width: Math.floor(width / 7) + 56,
          height: Math.floor(width / 7) + 56,
        }),
        render: () => (
          <div
            style={{
              width: "100%",
              height: "100%",
              padding: "28px 28px 28px 28px",
            }}
          >
            <MenuItem
              icon={
                <img
                  src={appIcons[app]}
                  style={{ maxWidth: "50%", maxHeight: "50%" }}
                />
              }
              itemName={app.replace(/^.\/apps\//, "").replace(/.png$/, "")}
              active={false}
            />
          </div>
        ),
      },
      {
        path: app.replace(/^.\/apps\//, "").replace(/\.png$/, "_focused.png"),
        pathPrefix: "catalogue/Application/grid/",
        overrideResolution: ({ width }: Resolution) => ({
          width: Math.floor(width / 7) + 56,
          height: Math.floor(width / 7) + 56,
        }),
        render: () => (
          <div
            style={{
              width: "100%",
              height: "100%",
              padding: "28px 28px 28px 28px",
            }}
          >
            <MenuItem
              icon={
                <img
                  src={appIcons[app]}
                  style={{ maxWidth: "50%", maxHeight: "50%" }}
                />
              }
              itemName={app.replace(/^.\/apps\//, "").replace(/.png$/, "")}
              active
            />
          </div>
        ),
      },
    ]),
  ],
  schemes: [],
  styles: {
    "--item-background": "linear-gradient(to top, #0f2027, #203a43, #2c5364)",
    "--item-background-active":
      "linear-gradient(to bottom, #0f2027, #203a43, #2c5364)",
    "--item-border-color": "#2c5364",
    "--item-border-color-active": "rgba(221, 221, 221, 0.7)",
    "--item-shadow-color": "rgba(0, 0, 0, 0.25)",
    "--item-shadow-color-active": "rgba(221, 221, 221, 0.5)",
    "--text-color": "#dddddd",
  },
  languages: ["en"],
  fallbackLanguage: "en",
  skipCredits: true,
};

export const minimalRoundGridIconsSummer = extend(minimalRoundGridIcons, {
  name: "Minimal Round Grid Icons Summer",
  styles: {
    "--item-background": "linear-gradient(to top, #f37335, #fdc830)",
    "--item-background-active": "linear-gradient(to bottom, #f37335, #fdc830)",
    "--item-border-color": "#fdc830",
    "--item-border-color-active": "rgba(255, 255, 255, 0.7)",
    "--text-color": "#fff0cc",
  },
});

export const minimalRoundGridIconsNight = extend(minimalRoundGridIcons, {
  name: "Minimal Round Grid Icons Night",
  styles: {
    "--item-background": "linear-gradient(to top, #232526, #414345)",
    "--item-background-active": "linear-gradient(to bottom, #232526, #414345)",
    "--item-border-color": "#414345",
    "--item-border-color-active": "rgba(255, 255, 255, 0.7)",
  },
});

export const minimalRoundGridIconsLime = extend(minimalRoundGridIcons, {
  name: "Minimal Round Grid Icons Lime",
  styles: {
    "--item-background": "linear-gradient(to top, #56ab2f, #a8e063)",
    "--item-background-active": "linear-gradient(to bottom, #56ab2f, #a8e063)",
    "--item-border-color": "#a8e063",
    "--item-border-color-active": "rgba(255, 255, 255, 0.7)",
    "--text-color": "#ffffff",
  },
});

export const minimalRoundGridIconsCherry = extend(minimalRoundGridIcons, {
  name: "Minimal Round Grid Icons Cherry",
  styles: {
    "--item-background": "linear-gradient(to top, #d31027, #ea384d)",
    "--item-background-active": "linear-gradient(to bottom, #d31027, #ea384d)",
    "--item-border-color": "#ea384d",
    "--item-border-color-active": "rgba(255, 255, 255, 0.7)",
    "--text-color": "#ffffff",
  },
});

export const minimalRoundGridIconsMetal = extend(minimalRoundGridIcons, {
  name: "Minimal Round Grid Icons Metal",
  styles: {
    "--item-background": "linear-gradient(to top, #424347, #859398)",
    "--item-background-active": "linear-gradient(to bottom, #424347, #859398)",
    "--item-border-color": "#859398",
    "--item-border-color-active": "rgba(255, 255, 255, 0.7)",
    "--text-color": "#ffffff",
  },
});

export const minimalRoundGridIconsOcean = extend(minimalRoundGridIcons, {
  name: "Minimal Round Grid Icons Ocean",
  styles: {
    "--item-background": "linear-gradient(to top, #021b79, #0575e6)",
    "--item-background-active": "linear-gradient(to bottom, #021b79, #0575e6)",
    "--item-border-color": "#0575e6",
    "--item-border-color-active": "rgba(255, 255, 255, 0.7)",
    "--text-color": "#ffffff",
  },
});

export const minimalRoundGridIconsAmethyst = extend(minimalRoundGridIcons, {
  name: "Minimal Round Grid Icons Amethyst",
  styles: {
    "--item-background": "linear-gradient(to top, #6e48aa, #9d50bb)",
    "--item-background-active": "linear-gradient(to bottom, #6e48aa, #9d50bb)",
    "--item-border-color": "#9d50bb",
    "--item-border-color-active": "rgba(255, 255, 255, 0.7)",
    "--text-color": "#ffffff",
  },
});

export const minimalRoundGridIconsEmerald = extend(minimalRoundGridIcons, {
  name: "Minimal Round Grid Icons Emerald",
  styles: {
    "--item-background": "linear-gradient(to top, #093028, #237a57)",
    "--item-background-active": "linear-gradient(to bottom, #093028, #237a57)",
    "--item-border-color": "#237a57",
    "--item-border-color-active": "rgba(255, 255, 255, 0.7)",
    "--text-color": "#ffffff",
  },
});
