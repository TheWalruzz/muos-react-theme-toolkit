import { Resolution, ThemeConfig } from "@/types";
import { BootLogo } from "./components/BootLogo";
import { Charging } from "./components/Charging";
import { Default } from "./components/Default";
import { Reboot } from "./components/Reboot";
import { Shutdown } from "./components/Shutdown";
import { StartScreen } from "./components/StartScreen";
import { MainMenu } from "./components/MainMenu";
import { defaultScheme } from "./schemes/default";
import { muxlaunchScheme } from "./schemes/muxlaunch";
import { extend } from "@/utils/extend";
import { assets } from "./assets";

import "./index.css";

export const minimalRoundGrid: ThemeConfig = {
  name: "Minimal Round Grid",
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
    { path: "image/wall/default.png", render: () => <Default /> },
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
      path: "image/static/muxlaunch/collection.png",
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
      path: "scheme/default.ini",
      scheme: defaultScheme,
    },
    {
      path: "scheme/muxlaunch.ini",
      scheme: muxlaunchScheme,
    },
  ],
  assets,
  styles: {
    "--background": "linear-gradient(to top, #0f2027, #203a43, #2c5364)",
    "--item-background": "linear-gradient(to top, #0f2027, #203a43, #2c5364)",
    "--item-background-active":
      "linear-gradient(to bottom, #0f2027, #203a43, #2c5364)",
    "--font": "'Dimica Light'",
    "--text-color": "#dddddd",
    "--text-shadow-color": "rgba(0, 0, 0, 0.7)",
    "--item-border-color": "#2c5364",
    "--item-border-color-active": "rgba(221, 221, 221, 0.7)",
    "--item-shadow-color": "rgba(0, 0, 0, 0.5)",
    "--item-shadow-color-active": "rgba(221, 221, 221, 0.5)",
    "--background-color": "#0f2027",
    "--item-size": "calc(var(--width) / 7)",
    "--item-size-large": "calc(var(--width) / 4)",
  },
  languages: ["en", "pl"],
  fallbackLanguage: "en",
};

export const minimalRoundGridSummer = extend(minimalRoundGrid, {
  name: "Minimal Round Grid Summer",
  styles: {
    "--background": "linear-gradient(to top, #f37335, #fdc830)",
    "--item-background": "linear-gradient(to top, #f37335, #fdc830)",
    "--item-background-active": "linear-gradient(to bottom, #f37335, #fdc830)",
    "--item-border-color": "#fdc830",
    "--item-border-color-active": "rgba(255, 255, 255, 0.7)",
    "--text-color": "#ffffff",
    "--background-color": "#f37335",
  },
});

export const minimalRoundGridNight = extend(minimalRoundGrid, {
  name: "Minimal Round Grid Night",
  styles: {
    "--background": "linear-gradient(to top, #232526, #414345)",
    "--item-background": "linear-gradient(to top, #232526, #414345)",
    "--item-background-active": "linear-gradient(to bottom, #232526, #414345)",
    "--item-border-color": "#414345",
    "--item-border-color-active": "rgba(255, 255, 255, 0.7)",
    "--background-color": "#232526",
  },
});

export const minimalRoundGridLime = extend(minimalRoundGrid, {
  name: "Minimal Round Grid Lime",
  styles: {
    "--background": "linear-gradient(to top, #56ab2f, #a8e063)",
    "--item-background": "linear-gradient(to top, #56ab2f, #a8e063)",
    "--item-background-active": "linear-gradient(to bottom, #56ab2f, #a8e063)",
    "--item-border-color": "#a8e063",
    "--item-border-color-active": "rgba(255, 255, 255, 0.7)",
    "--text-color": "#ffffff",
    "--background-color": "#56ab2f",
  },
});

export const minimalRoundGridCherry = extend(minimalRoundGrid, {
  name: "Minimal Round Grid Cherry",
  styles: {
    "--background": "linear-gradient(to top, #d31027, #ea384d)",
    "--item-background": "linear-gradient(to top, #d31027, #ea384d)",
    "--item-background-active": "linear-gradient(to bottom, #d31027, #ea384d)",
    "--item-border-color": "#ea384d",
    "--item-border-color-active": "rgba(255, 255, 255, 0.7)",
    "--text-color": "#ffffff",
    "--background-color": "#d31027",
  },
});

export const minimalRoundGridDarkCherry = extend(minimalRoundGrid, {
  name: "Minimal Round Grid Dark Cherry",
  styles: {
    "--background": "linear-gradient(to top, #d31027, #ea384d)",
    "--item-background": "linear-gradient(to top, #232526, #414345)",
    "--item-background-active": "linear-gradient(to bottom, #232526, #414345)",
    "--item-border-color": "#414345",
    "--item-border-color-active": "rgba(255, 255, 255, 0.7)",
    "--text-color": "#ffffff",
    "--background-color": "#d31027",
  },
});
