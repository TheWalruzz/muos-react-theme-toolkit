import { Resolution, ThemeConfig } from "@/types";
import { Default } from "./components/Default";
import { MainMenu } from "./components/MainMenu";
import { BootLogo } from "./components/BootLogo";
import { StartScreen } from "./components/StartScreen";
import { Reboot } from "./components/Reboot";
import { Shutdown } from "./components/Shutdown";
import { Charging } from "./components/Charging";
import { Scanlines } from "./components/Scanlines";
import { defaultScheme } from "./schemes/default";
import { muxlaunchScheme } from "./schemes/muxlaunch";

import "./index.css";

export const hexaneonGlitch: ThemeConfig = {
  name: "Hexaneon Glitch",
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
      render: () => (
        <Default>
          <MainMenu itemIndex={0} />
          <Scanlines />
        </Default>
      ),
    },
    ...Array.from({ length: 24 }).map((_, index) => ({
      path: `image/wall/default.${index}.png`,
      render: () => <Default animationFrame={index} />,
    })),
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
      render: () => (
        <Default>
          <Reboot />
          <Scanlines />
        </Default>
      ),
    },
    {
      path: "image/shutdown.png",
      render: () => (
        <Default>
          <Shutdown />
          <Scanlines />
        </Default>
      ),
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
    "--background-gradient": "linear-gradient(to top, #000000, #121212)",
    "--background-color": "#313131",
    "--item-color-active": "#ffc8fb",
    "--item-color-glow": "#ff13f0",
    "--text-color": "#ffffff",
    "--item-color": "#ffffff",
    "--glow": "0px 0px 8px var(--item-color-glow)",
    "--shadow": "3px 3px 6px #000000",
    "--screen-filter": "url(#rgb-split)",
    "--scanlines":
      "repeating-linear-gradient(transparent,transparent 2px,black 3px,black 3px)",
    color: "var(--item-color)",
    fontFamily: "'Glitch Goblin'",
  },
  languages: ["en"],
  fallbackLanguage: "en",
};
