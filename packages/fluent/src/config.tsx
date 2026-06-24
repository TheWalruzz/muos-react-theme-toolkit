import "./index.css";
import { ThemeConfig, Resolution, ScreenConfig } from "@/types";
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
import { muxcollectScheme } from "./schemes/muxcollect";
import {
  Battery0Regular,
  BrightnessHighRegular,
  Speaker2Regular,
} from "@fluentui/react-icons";
import { OverlayIndicator } from "./components/OverlayIndicator";
import { muxploreCarouselScheme } from "./schemes/muxploreCarousel";
import { defaultCatalogueAssets } from "./assets/alternates/Default";
import { carouselCatalogueAssets } from "./assets/alternates/Carousel";

const getOverlayScreens = (): ScreenConfig[] => [
  ...Array.from(Array(10).keys()).map((index) => ({
    path: `battery_${index}.png`,
    ignoreInLocalized: true,
    pathPrefix: "overlay/battery/",
    overrideResolution: ({ width, height }: Resolution) => ({
      width: Math.round(width / 3.5),
      height: Math.round(height / 10),
    }),
    render: ({ height }: Resolution) => (
      <OverlayIndicator
        index={index}
        icon={<Battery0Regular fontSize={Math.round(height / 18)} />}
      />
    ),
  })),
  ...Array.from(Array(10).keys()).map((index) => ({
    path: `bright_${index}.png`,
    ignoreInLocalized: true,
    pathPrefix: "overlay/bright/",
    overrideResolution: ({ width, height }: Resolution) => ({
      width: Math.round(width / 3.5),
      height: Math.round(height / 10),
    }),
    render: ({ height }: Resolution) => (
      <OverlayIndicator
        index={index}
        icon={<BrightnessHighRegular fontSize={Math.round(height / 18)} />}
      />
    ),
  })),
  ...Array.from(Array(10).keys()).map((index) => ({
    path: `volume_${index}.png`,
    ignoreInLocalized: true,
    pathPrefix: "overlay/volume/",
    overrideResolution: ({ width, height }: Resolution) => ({
      width: Math.round(width / 3.5),
      height: Math.round(height / 10),
    }),
    render: ({ height }: Resolution) => (
      <OverlayIndicator
        index={index}
        icon={<Speaker2Regular fontSize={Math.round(height / 18)} />}
      />
    ),
  })),
];

export const fluentLight: ThemeConfig = {
  name: "Fluent Light",
  author: "TheWalruzz",
  osVersion: "2606.0",
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
        <MainMenu itemIndex={0} showBackground transparentHeader={false} />
      ),
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
    // overlays for brightness, volume and battery
    ...getOverlayScreens(),
    // duplicate the 640x480 as the default overlays
    ...getOverlayScreens().map((screen) => ({
      ...screen,
      ignoreOtherResolutions: true,
    })),
  ],
  assets,
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
      scheme: muxcollectScheme,
    },
    {
      path: "scheme/muxactivity.ini",
      // re-use muxhistory scheme
      scheme: muxhistoryScheme,
    },
  ],
  altSchemes: {
    Default: [
      {
        path: "scheme/muxplore.ini",
        scheme: muxploreScheme,
      },
    ],
    Carousel: [
      {
        path: "scheme/muxplore.ini",
        scheme: muxploreCarouselScheme,
      },
    ],
  },
  altAssets: {
    Default: defaultCatalogueAssets,
    Carousel: carouselCatalogueAssets,
  },
  styles: {
    "--font": "'NotoSansKR', 'Selawik'",
    "--item-border-width": "1px",
    "--shadow":
      "0 0 calc(var(--height) / 240) rgba(0, 0, 0, 0.12), 0 calc(var(--height) / 240) calc(var(--height) / 120) rgba(0, 0, 0, 0.14)",
    "--drop-shadow":
      "drop-shadow(0 0 calc(var(--height) / 240) rgba(0, 0, 0, 0.12)) drop-shadow(0 calc(var(--height) / 240) calc(var(--height) / 120) rgba(0, 0, 0, 0.14))",
    "--fake-shadow-color": "#bdbdbd",
    "--font-shadow-color": "#000000",
    "--font-shadow-opacity": "0.14",
    "--font-shadow":
      "calc(var(--height) / 240) calc(var(--height) / 240) rgba(0, 0, 0, 0.14)",
    "--background": "#fafafa",
    "--text-color": "#242424",
    "--item-color": "#ffffff",
    "--item-color-active": "#eaeaea",
    "--item-border-color": "#f1f1f1",
    "--item-border-color-active": "#ededed",
    "--header-height-divider": "9",
    "--header-height":
      "round(calc(var(--height) / var(--header-height-divider)), 1px)",
    "--padding-divider": "60",
    "--padding": "round(calc(var(--height) / var(--padding-divider)), 1px)",
    "--item-grid-gap-divider": "60",
    "--item-grid-gap":
      "round(calc(var(--height) / var(--item-grid-gap-divider)), 1px)",
  },
  languages: ["en", "pl", "ko", "fr", "pt_BR", "es", "it"],
  fallbackLanguage: "en",
};

export const fluentDark = extend(fluentLight, {
  name: "Fluent Dark",
  styles: {
    "--shadow":
      "0 0 calc(var(--height) / 240) rgba(0,0,0,0.24), 0 calc(var(--height) / 240) calc(var(--height) / 120) rgba(0,0,0,0.28)",
    "--drop-shadow":
      "drop-shadow(0 0 calc(var(--height) / 240) rgba(0,0,0,0.24)) drop-shadow(0 calc(var(--height) / 240) calc(var(--height) / 120) rgba(0,0,0,0.28))",
    "--fake-shadow-color": "#111111",
    "--font-shadow-color": "#000000",
    "--font-shadow-opacity": "0.4",
    "--font-shadow":
      "calc(var(--height) / 240) calc(var(--height) / 240) rgba(0, 0, 0, 0.4)",
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

export const fluentPurple = extend(fluentLight, {
  name: "Fluent Purple",
  styles: {
    "--shadow":
      "0 0 calc(var(--height) / 240) rgba(0,0,0,0.24), 0 calc(var(--height) / 240) calc(var(--height) / 120) rgba(0,0,0,0.28)",
    "--drop-shadow":
      "drop-shadow(0 0 calc(var(--height) / 240) rgba(0,0,0,0.24)) drop-shadow(0 calc(var(--height) / 240) calc(var(--height) / 120) rgba(0,0,0,0.28))",
    "--fake-shadow-color": "#290041",
    "--font-shadow-color": "#000000",
    "--font-shadow-opacity": "0.3",
    "--font-shadow":
      "calc(var(--height) / 240) calc(var(--height) / 240) rgba(0, 0, 0, 0.3)",
    "--background": "#4A0077",
    "--panel-background-color": "#2A0044",
    "--panel-background-color-alpha": "#2A00444c",
    "--text-color": "#ffffff",
    "--item-color": "#5b0094",
    "--item-color-active": "#744da9",
    "--item-border-color": "#5f0498",
    "--item-border-color-active": "#764fab",
  },
});

export const fluentBlue = extend(fluentLight, {
  name: "Fluent Blue",
  styles: {
    "--shadow":
      "0 0 calc(var(--height) / 240) rgba(0,0,0,0.24), 0 calc(var(--height) / 240) calc(var(--height) / 120) rgba(0,0,0,0.28)",
    "--drop-shadow":
      "drop-shadow(0 0 calc(var(--height) / 240) rgba(0,0,0,0.24)) drop-shadow(0 calc(var(--height) / 240) calc(var(--height) / 120) rgba(0,0,0,0.28))",
    "--fake-shadow-color": "#061c32",
    "--font-shadow-color": "#000000",
    "--font-shadow-opacity": "0.24",
    "--font-shadow":
      "calc(var(--height) / 240) calc(var(--height) / 240) rgba(0, 0, 0, 0.24)",
    "--background": "#1976d2",
    "--panel-background-color": "#1565c0",
    "--panel-background-color-alpha": "#1565c04c",
    "--text-color": "#ffffff",
    "--item-color": "#1e88e5",
    "--item-color-active": "#42a5f5",
    "--item-border-color": "#2196f3",
    "--item-border-color-active": "#64b5f6",
  },
});

export const fluentMustard = extend(fluentLight, {
  name: "Fluent Mustard",
  styles: {
    "--shadow":
      "0 0 calc(var(--height) / 240) rgba(0,0,0,0.16), 0 calc(var(--height) / 240) calc(var(--height) / 120) rgba(0,0,0,0.18)",
    "--drop-shadow":
      "drop-shadow(0 0 calc(var(--height) / 240) rgba(0,0,0,0.16)) drop-shadow(0 calc(var(--height) / 240) calc(var(--height) / 120) rgba(0,0,0,0.18))",
    "--fake-shadow-color": "#8B6914",
    "--font-shadow-color": "#000000",
    "--font-shadow-opacity": "0.18",
    "--font-shadow":
      "calc(var(--height) / 240) calc(var(--height) / 240) rgba(0, 0, 0, 0.18)",
    "--background": "#E8B923",
    "--panel-background-color": "#b48100",
    "--panel-background-color-alpha": "#b481004c",
    "--text-color": "#2D2D2D",
    "--item-color": "#FFDE59",
    "--item-color-active": "#FFF7A5",
    "--item-border-color": "#D4A017",
    "--item-border-color-active": "#E8B923",
  },
});
