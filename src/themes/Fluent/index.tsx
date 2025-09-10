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
import { ScreenWithHeaderAndFooter } from "./components/ScreenWithHeaderAndFooter";

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

export const fluentLight: ThemeConfig = {
  name: "Fluent Light",
  author: "TheWalruzz",
  osVersion: "2508.0",
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
      path: "image/overlay.png",
      render: () => (
        <Default hideBackground>
          <ScreenWithHeaderAndFooter />
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
    // ...Object.keys(systemIcons).flatMap((system) => [
    //   {
    //     path: system.replace(/^.\/systems\//, ""),
    //     pathPrefix: "catalogue/Folder/grid/",
    //     overrideResolution: ({ width }: Resolution) => ({
    //       width: Math.floor(width / 7) + 56,
    //       height: Math.floor(width / 7) + 56,
    //     }),
    //     includeInAssetsPackage: true,
    //     render: () => (
    //       <div
    //         style={{
    //           width: "100%",
    //           height: "100%",
    //           padding: "28px 28px 28px 28px",
    //         }}
    //       >
    //         <GridItem
    //           icon={
    //             <img
    //               src={systemIcons[system]}
    //               style={{ maxWidth: "85%", maxHeight: "50%" }}
    //             />
    //           }
    //           active={false}
    //         />
    //       </div>
    //     ),
    //   },
    //   {
    //     path: system
    //       .replace(/^.\/systems\//, "")
    //       .replace(/\.png$/, "_focused.png"),
    //     pathPrefix: "catalogue/Folder/grid/",
    //     overrideResolution: ({ width }: Resolution) => ({
    //       width: Math.floor(width / 7) + 56,
    //       height: Math.floor(width / 7) + 56,
    //     }),
    //     includeInAssetsPackage: true,
    //     render: () => (
    //       <div
    //         style={{
    //           width: "100%",
    //           height: "100%",
    //           padding: "28px 28px 28px 28px",
    //         }}
    //       >
    //         <GridItem
    //           icon={
    //             <img
    //               src={systemIcons[system]}
    //               style={{ maxWidth: "85%", maxHeight: "50%" }}
    //             />
    //           }
    //           active
    //         />
    //       </div>
    //     ),
    //   },
    // ]),
    // ...Object.keys(appIcons).flatMap((app) => [
    //   {
    //     path: app.replace(/^.\/apps\//, ""),
    //     pathPrefix: "catalogue/Application/grid/",
    //     overrideResolution: ({ width }: Resolution) => ({
    //       width: Math.floor(width / 7) + 56,
    //       height: Math.floor(width / 7) + 56,
    //     }),
    //     includeInAssetsPackage: true,
    //     render: () => (
    //       <div
    //         style={{
    //           width: "100%",
    //           height: "100%",
    //           padding: "28px 28px 28px 28px",
    //         }}
    //       >
    //         <GridItem
    //           icon={
    //             <img
    //               src={appIcons[app]}
    //               style={{ maxWidth: "50%", maxHeight: "50%" }}
    //             />
    //           }
    //           itemName={app.replace(/^.\/apps\//, "").replace(/.png$/, "")}
    //           active={false}
    //         />
    //       </div>
    //     ),
    //   },
    //   {
    //     path: app.replace(/^.\/apps\//, "").replace(/\.png$/, "_focused.png"),
    //     pathPrefix: "catalogue/Application/grid/",
    //     overrideResolution: ({ width }: Resolution) => ({
    //       width: Math.floor(width / 7) + 56,
    //       height: Math.floor(width / 7) + 56,
    //     }),
    //     includeInAssetsPackage: true,
    //     render: () => (
    //       <div
    //         style={{
    //           width: "100%",
    //           height: "100%",
    //           padding: "28px 28px 28px 28px",
    //         }}
    //       >
    //         <GridItem
    //           icon={
    //             <img
    //               src={appIcons[app]}
    //               style={{ maxWidth: "50%", maxHeight: "50%" }}
    //             />
    //           }
    //           itemName={app.replace(/^.\/apps\//, "").replace(/.png$/, "")}
    //           active
    //         />
    //       </div>
    //     ),
    //   },
    // ]),
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
    // {
    //   path: "scheme/muxplore.ini",
    //   scheme: muxploreScheme,
    // },
    // {
    //   path: "scheme/muxapp.ini",
    //   scheme: muxploreScheme,
    // },
  ],
  assets,
  styles: {
    "--font": "'Selawik'",
    "--header-footer-height-divider": "9",
    "--item-border-width": "1px",
    "--shadow": "0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.14)",
    "--drop-shadow":
      "drop-shadow(0 0 2px rgba(0, 0, 0, 0.12)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.14))",
    "--background": "#fafafa",
    "--panel-background": "#ffffff",
    "--panel-background-color-alpha": "#ffffff4c",
    "--panel-background-alpha": "76",
    "--text-color": "#242424",
    "--item-color": "#ffffff",
    "--item-color-active": "#f5f5f5",
    "--item-border-color": "#d1d1d1",
    "--item-border-color-active": "#c7c7c7",
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
    "--background": "#1f1f1f",
    "--panel-background-color": "#000000",
    "--panel-background-color-alpha": "#0000004c",
    "--text-color": "#ffffff",
    "--item-color": "#292929",
    "--item-color-active": "#3d3d3d",
    "--item-border-color": "#666666",
    "--item-border-color-active": "#757575",
  },
});
