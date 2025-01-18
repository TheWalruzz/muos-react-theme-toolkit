import { Resolution, ThemeConfig } from "@/types";
import { BootLogo } from "./BootLogo";
import { Charging } from "./Charging";
import { Default } from "./Default";
import { Reboot } from "./Reboot";
import { Shutdown } from "./Shutdown";
import { StartScreen } from "./StartScreen";
import { MainMenu } from "./MainMenu";
import { defaultScheme } from "./schemes/default";
import { muxlaunchScheme } from "./schemes/muxlaunch";

import "./index.css";

export const config: ThemeConfig = {
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
    "--background-gradient-top":
      "linear-gradient(to top, #0f2027, #203a43, #2c5364)",
    "--background-gradient-bottom":
      "linear-gradient(to bottom, #0f2027, #203a43, #2c5364)",
    "--font": "'Dimica Light'",
    "--text-color": "#dddddd",
    "--text-shadow-color": "rgba(0, 0, 0, 0.7)",
    "--item-border-color": "#2c5364",
    "--item-border-color-active": "rgba(221, 221, 221, 0.7)",
    "--item-shadow-color": "rgba(0, 0, 0, 0.5)",
    "--item-shadow-color-active": "rgba(221, 221, 221, 0.5)",
    "--background-color": "#0f2027",
  },
  languages: ["en", "pl"],
  fallbackLanguage: "en",
};
