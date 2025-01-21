import { Resolution, ThemeConfig } from "@/types";
import { Default } from "./components/Default";
import { MainMenu } from "./components/MainMenu";
import { BootLogo } from "./components/BootLogo";
import { StartScreen } from "./components/StartScreen";
import { Reboot } from "./components/Reboot";
import { Shutdown } from "./components/Shutdown";
import { Charging } from "./components/Charging";
import { extend } from "@/utils/extend";

import "./index.css";
import { defaultScheme } from "./schemes/default";
import { muxlaunchScheme } from "./schemes/muxlaunch";

export const hexaneon: ThemeConfig = {
  name: "Hexaneon Black Yellow",
  author: "TheWalruzz",
  screens: [
    {
      path: "preview.png",
      // This will make the image that size regardless of target resolution
      // The parameter to the function is the original resolution of the screens (e.g. 640x480, 720x720 etc.)
      overrideResolution: ({ width, height }: Resolution) => {
        if (width === height) {
          return { width: 340, height: 340 };
        }
        return { width: 288, height: 216 };
      },
      render: () => <MainMenu itemIndex={0} />,
    },
    {
      path: "image/wall/default.png",
      render: () => <Default />,
    },
    {
      path: "image/bootlogo.bmp",
      render: () => <BootLogo />,
    },
    {
      path: "image/wall/muxstart.png",
      render: () => <StartScreen />,
    },
    {
      path: "image/reboot.png",
      render: () => <Reboot />,
    },
    {
      path: "image/shutdown.png",
      render: () => <Shutdown />,
    },
    {
      path: "image/wall/muxcharge.png",
      render: () => <Charging />,
    },
    {
      path: "image/static/muxlaunch/explore.png",
      render: () => <MainMenu itemIndex={0} />,
    },
    {
      path: "image/static/muxlaunch/favourite.png",
      render: () => <MainMenu itemIndex={1} />,
    },
    {
      path: "image/static/muxlaunch/history.png",
      render: () => <MainMenu itemIndex={2} />,
    },
    {
      path: "image/static/muxlaunch/apps.png",
      render: () => <MainMenu itemIndex={3} />,
    },
    {
      path: "image/static/muxlaunch/info.png",
      render: () => <MainMenu itemIndex={4} />,
    },
    {
      path: "image/static/muxlaunch/config.png",
      render: () => <MainMenu itemIndex={5} />,
    },
    {
      path: "image/static/muxlaunch/reboot.png",
      render: () => <MainMenu itemIndex={6} />,
    },
    {
      path: "image/static/muxlaunch/shutdown.png",
      render: () => <MainMenu itemIndex={7} />,
    },
  ],
  schemes: [
    {
      path: "scheme/default.txt",
      scheme: defaultScheme,
    },
    {
      path: "scheme/muxlaunch.txt",
      scheme: muxlaunchScheme,
    },
  ],
  styles: {
    "--background-gradient": "linear-gradient(to top, #000000, #313131)",
    "--background-color": "#313131",
    "--item-color-active": "#ffe397",
    "--item-color-glow": "#FDC830",
    "--text-color": "#ffffff",
    "--item-color": "#ffffff",
    "--glow": "0px 0px 8px var(--item-color-glow)",
    "--shadow": "3px 3px 6px #000000",
    "--screen-filter": "url(#rgb-split)",
    color: "var(--item-color)",
    fontFamily: "'Glitch Goblin'",
  },
  languages: ["en"],
  fallbackLanguage: "en",
};

export const hexaneonBlackPink = extend(hexaneon, {
  name: "Hexaneon Black Pink",
  styles: {
    "--item-color-active": "#ffc8fb",
    "--item-color-glow": "#ff13f0",
  },
});

export const hexaneonBlackCyan = extend(hexaneon, {
  name: "Hexaneon Black Cyan",
  styles: {
    "--item-color-active": "#c8ffff",
    "--item-color-glow": "#00FFFF",
  },
});

export const hexaneonBlackGreen = extend(hexaneon, {
  name: "Hexaneon Black Green",
  styles: {
    "--item-color-active": "#bdffb1",
    "--item-color-glow": "#2cff05",
  },
});

export const hexaneonBlackRed = extend(hexaneon, {
  name: "Hexaneon Black Red",
  styles: {
    "--item-color-active": "#ffc8d3",
    "--item-color-glow": "#ff073a",
  },
});

export const hexaneonBlueCyan = extend(hexaneon, {
  name: "Hexaneon Blue Cyan",
  styles: {
    "--background-gradient": "linear-gradient(to top, #000428, #003461)",
    "--background-color": "#003461",
    "--item-color-active": "#c8ffff",
    "--item-color-glow": "#00FFFF",
  },
});

export const hexaneonPurplePink = extend(hexaneon, {
  name: "Hexaneon Purple Pink",
  styles: {
    "--background-gradient": "linear-gradient(to bottom, #41295a, #2f0743)",
    "--background-color": "#2f0743",
    "--item-color-active": "#ffc8fb",
    "--item-color-glow": "#ff13f0",
  },
});

export const hexaneonRed = extend(hexaneon, {
  name: "Hexaneon Red",
  styles: {
    "--background-gradient": "linear-gradient(to bottom, #680000, #190a05)",
    "--background-color": "#190a05",
    "--item-color-active": "#fd96ab",
    "--item-color-glow": "#ff073a",
  },
});
