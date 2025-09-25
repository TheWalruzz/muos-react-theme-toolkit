import "./index.css";
import { ThemeConfig, Resolution } from "@/types";
import { assets } from "./assets";
import { defaultScheme } from "./schemes/default";
import { muxlaunchScheme } from "./schemes/muxlaunch";
import { muxploreScheme } from "./schemes/muxplore";
import { MainMenu } from "./components/MainMenu";
import { Default } from "./components/Default";
import { extend } from "@/utils/extend";
import { BootLogo } from "./components/BootLogo";
import { Reboot } from "./components/Reboot";
import { Shutdown } from "./components/Shutdown";
import { Charging } from "./components/Charging";
import { muxhistoryScheme } from "./schemes/muxhistory";
import { muxappScheme } from "./schemes/muxapp";

// const systemIcons: Record<string, string> = import.meta.glob(
//   "./systems/**/*.png",
//   {
//     eager: true,
//     query: "?url",
//     import: "default",
//   }
// );

// const appIcons: Record<string, string> = import.meta.glob("./apps/**/*.png", {
//   eager: true,
//   query: "?url",
//   import: "default",
// });

export const fluentLight: ThemeConfig = {
  name: "Fluent Light",
  author: "TheWalruzz",
  osVersion: "2508.1",
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
      render: () => <MainMenu itemIndex={0} showBackground />,
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
      render: () => <MainMenu itemIndex={0} showBackground={false} />,
    },
    {
      path: "image/static/muxlaunch/collection.png",
      render: () => <MainMenu itemIndex={1} showBackground={false} />,
    },
    {
      path: "image/static/muxlaunch/history.png",
      render: () => <MainMenu itemIndex={2} showBackground={false} />,
    },
    {
      path: "image/static/muxlaunch/apps.png",
      render: () => <MainMenu itemIndex={3} showBackground={false} />,
    },
    {
      path: "image/static/muxlaunch/info.png",
      render: () => <MainMenu itemIndex={4} showBackground={false} />,
    },
    {
      path: "image/static/muxlaunch/config.png",
      render: () => <MainMenu itemIndex={5} showBackground={false} />,
    },
    {
      path: "image/static/muxlaunch/reboot.png",
      render: () => <MainMenu itemIndex={6} showBackground={false} />,
    },
    {
      path: "image/static/muxlaunch/shutdown.png",
      render: () => <MainMenu itemIndex={7} showBackground={false} />,
    },
    // NOTE: those were only used to generate the images once, since we only need one resolution
    // ...Object.keys(systemIcons).map((system) => ({
    //   path: system.replace(/^.\/systems\//, ""),
    //   pathPrefix: "catalogue/Folder/grid/",
    //   includeInAssetsPackage: true,
    //   overrideResolution: () => ({
    //     width: 104,
    //     height: 104,
    //   }),
    //   render: () => (
    //     <div
    //       style={{
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",
    //         width: "100%",
    //         height: "100%",
    //       }}
    //     >
    //       <img
    //         src={systemIcons[system]}
    //         style={{ maxWidth: "100%", maxHeight: "100%" }}
    //       />
    //     </div>
    //   ),
    // })),
    // ...Object.keys(appIcons).map((app) => ({
    //   path: app.replace(/^.\/apps\//, ""),
    //   pathPrefix: "catalogue/Application/grid/",
    //   includeInAssetsPackage: true,
    //   overrideResolution: () => ({
    //     width: 104,
    //     height: 104,
    //   }),
    //   render: () => (
    //     <div
    //       style={{
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",
    //         width: "100%",
    //         height: "100%",
    //       }}
    //     >
    //       <img
    //         src={appIcons[app]}
    //         style={{ maxWidth: "80%", maxHeight: "80%" }}
    //       />
    //     </div>
    //   ),
    // })),
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
    {
      path: "scheme/muxplore.ini",
      scheme: muxploreScheme,
    },
    {
      path: "scheme/muxapp.ini",
      scheme: muxappScheme,
    },
    {
      path: "scheme/muxhistory.ini",
      scheme: muxhistoryScheme,
    },
    {
      path: "scheme/muxcollect.ini",
      scheme: muxhistoryScheme,
    },
  ],
  assets,
  styles: {
    "--font": "'Selawik'",
    "--item-border-width": "1px",
    "--shadow": "0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.14)",
    "--drop-shadow":
      "drop-shadow(0 0 2px rgba(0, 0, 0, 0.12)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.14))",
    "--fake-shadow-color": "#bdbdbd",
    "--background": "#fafafa",
    "--text-color": "#242424",
    "--item-color": "#ffffff",
    "--item-color-active": "#eaeaea",
    "--item-border-color": "#f1f1f1",
    "--item-border-color-active": "#ededed",
    "--item-grid-gap": "8px",
    "--header-height-divider": "9",
    "--header-height":
      "round(calc(var(--height) / var(--header-height-divider)), 1px)",
    "--padding": "8px",
  },
  languages: ["en", "pl"],
  fallbackLanguage: "en",
};

export const fluentDark = extend(fluentLight, {
  name: "Fluent Dark",
  styles: {
    "--shadow": "0 0 2px rgba(0,0,0,0.24), 0 2px 4px rgba(0,0,0,0.28)",
    "--drop-shadow":
      "drop-shadow(0 0 2px rgba(0,0,0,0.24)) drop-shadow(0 2px 4px rgba(0,0,0,0.28))",
    "--fake-shadow-color": "#111111",
    "--background": "#1f1f1f",
    "--panel-background-color": "#000000",
    "--panel-background-color-alpha": "#0000004c",
    "--text-color": "#ffffff",
    "--item-color": "#292929",
    "--item-color-active": "#3d3d3d",
    "--item-border-color": "#333333",
    "--item-border-color-active": "#3f3f3f",
  },
});
