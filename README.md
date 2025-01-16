# muOS React Theme Toolkit

This is a simple tool that allows you to generate images and schemes for muOS themes based on React components you create. This is not a user friendly solution with easy UI, drag'n'drop and other bells and whistles - you still have to add and modify React components in code and style them in CSS for the images to generate correctly, so previous knowledge of React and CSS is probably needed.

You have full freedom in how you make your screen components, this tool only handles the heavy lifting of converting those components into images of different resolutions handled by muOS.

## Features

* Templating in React and CSS (or SCSS if you set it up for yourself)
* Dynamic generation of each screen in different resolutions (you can change them in `src/resolutions.ts`)
* Full internationalization support via `i18next` and `react-i18next`.
* Scheme generation from user-provided templates

## Requirements

* node.js >=18

## Basics

### Getting started

Run those commands to install necessary packages and run the dev server.

* npm install
* npm run dev

Navigate to http://localhost:5173/ and you'll see a (very) simple page that renders all configured components in provided resolutions, so you can preview them and debug any issues. It supports Hot Module Reloading, so each change you make to your screen components will be immediately applied to the page.

There, you can click the Download button to generate and download a ZIP file with all the images and schemes.

### Developing themes

#### Screen configuration

Since you might be working on several themes in one repository, put your screen components in `src/themes/THEME_NAME` and create an `index.tsx` file that exports a config array for that theme. Refer to existing example theme for a working example.

```tsx
export const screens: ScreenConfig[] = [
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
  // ...other screens
];
```

`path` property is the path to the image in the theme. As an example, providing the path `image/wall/default.png` will generate images in different resolution folders, e.g. `640x480/image/wall/default.png`, `720x480/image/wall/default.png`. The extension of the file matters, as this tool can generate only `.png` and `.bmp` files.

`render` function binds the path to the component that will be rendered as the screen.

Optionally, you can provide an `overrideResolution` function that will force that single screen to be generated at a different resolution from the rest. This is useful for generating preview images. The parameter passed to that function is the original resolution, so you can make changes accordingly. It expects `{ width: number; height: number; }` as a return value. 

After your configuration is ready, import it in `src/config.ts` and the screens will generate in the app. For example:

```ts
import { ScreenConfig } from "./types";
import { screens as minimalRoundScreens } from "./themes/MinimalRound";

export const screens: ScreenConfig[] = minimalRoundScreens;
```

#### Screen creation and styling

Each screen is a simple component that can be styled however you want, but keep in mind that you have to use `var(--width)` and `var(--height)` CSS variables to know the current resolution. Resolution can also be retrieved programatically using a `useResolution` hook:

```ts
const { width, height } = useResolution();
```

Example screens are a good way to see how it all works in practice. Of course, you're more than welcome to change things up and provide your own solutions. This is still technically a React app, so go wild!

#### Scheme templates

You can provide your own scheme templates that will generate appropriate files based on currently processed resolution. In your `src/themes/THEME_NAME/schemes` folder, add appropriate TypeScript files, e.g. `default.ts` (for default.txt scheme) with a proper template function that receives current resolution as a param, like so:

```ts
import { Scheme } from "@/types";

export const defaultScheme: Scheme = ({ width, height }) => `[background]
BACKGROUND=DDDDDD
BACKGROUND_ALPHA=0

[font]
FONT_HEADER_PAD_TOP=2
FONT_HEADER_PAD_BOTTOM=0
FONT_HEADER_ICON_PAD_TOP=0
FONT_HEADER_ICON_PAD_BOTTOM=0
// ...other properties go below
`;
```

This leverages TypeScript's backtick string templates that allow you to easily modify the contents of a string. So if, for example, you wanted to change the top padding of the header based on current resolution, you can do it like so:

```ts
import { Scheme } from "@/types";

export const defaultScheme: Scheme = ({ height }) => `[background]
BACKGROUND=DDDDDD
BACKGROUND_ALPHA=0

[font]
FONT_HEADER_PAD_TOP=${height < 720 ? 2 : 4}
FONT_HEADER_PAD_BOTTOM=0
FONT_HEADER_ICON_PAD_TOP=0
FONT_HEADER_ICON_PAD_BOTTOM=0
// ...other properties go below
`;
```

You can create all the schemes you want that way.

After you're done, in your `src/themes/THEME_NAME/index.ts` add and export a scheme config next to your screen configs:

```ts
import { SchemeConfig } from "@/types";
import { defaultScheme } from "./schemes/default";
import { muxlaunchScheme } from "./schemes/muxlaunch";

// ...screen configs go here

export const schemes: SchemeConfig[] = [
  {
    path: "scheme/default.txt",
    scheme: defaultScheme,
  },
  {
    path: "scheme/muxlaunch.txt",
    scheme: muxlaunchScheme,
  },
];
```

Similarly to how you select screens to be rendered by the app, you import your scheme configs into `src/config.ts` file:

```ts
import { SchemeConfig } from "./types";
import { schemes as minimalRoundSchemes } from "./themes/MinimalRound";

// ...screen configs go here

export const schemes: SchemeConfig[] = minimalRoundSchemes;
```

Then, on ZIP creation, those schemes will be generated in every resolution's folder as expected.

If you do not wish to generate schemes, you can just set/export an empty array (`[]`) instead of those configs.

As always, refer to the example theme to see how it looks like in practice.

#### Localization

This tool uses `i18next` and `react-i18next` to provide translations. Refer to their documentations for more information, but the TL;DR is:

If you want to translate things in a component, you need `useTranslation` hook:

```ts
import { useTranslation } from "react-i18next";

const { t } = useTranslation();
```

This returns a `t` function that does all the heavy lifting:

```jsx
<div>{t("menu.explore", "Games")}</div>
```

First part of the function is the translation key that can be found in localization JSONs (more information below). The second part is the default value in English that can be omitted if you don't want to use them (especially useful if you're using an external JSON that didn't originate from this app, like official muOS translation JSONs).

All locales are placed in `src/locales` as JSON files. If you want to add a new locale, you'll need to add the JSON file there.

If you want to add new translation keys to JSONs based on the defaults, you can run `npm run i18n:extract` script that will extract all the new keys and place them in localization files.

In case you want to add a new locale by extracting existing keys and creating an English template, change `locales` property in `i18next-parser.config.js` and add your language code to the array. Then, run extraction command from above and edit your newly generated JSON file with new translations.

After all that, add your new JSON to `src/locales/index.ts` to be picked up by the app.

For example, if you wanted to add French:

```ts
import fr from "./fr.json";

export const resources = {
  // ...other translations
  fr: { translation: fr },
};
```

You can select which languages to generate images for by modifying `languages` variable in `src/config.ts`. E.g.:

```ts
export const languages: Language[] = ["en", "pl"];
```

Those language codes must correspond to the keys of the `resources` object in `src/locales/index.ts`. 

This will generate images in those languages to subfolders like `640x480/image/Polish/...` in the ZIP file, so that they will be recognizeable by muOS.

You can also set a fallback language (the one that will display whenever requested language is not available in the theme) by setting `fallbackLanguage` in `src/config.ts`:

```ts
export const fallbackLanguage: Language = "en";
```

Fallback language will not create a subfolder, like other languages.

#### Building fonts

You can build binary version of the font used with the included script. As an example, the font included in the example theme can be built with support for Polish characters using:

```
npm run font:generate -- --font "./public/fonts/Dimica/Dimica-Light.otf" -r 0x00-0x017F
```

This will generate `default.bin` file in `generated` folder.

Refer to https://muos.dev/themes/fonts.html for more info on how it all works.

# License
Distributed under the [MIT License](https://github.com/TheWalruzz/muos-react-theme-toolkit/blob/main/LICENSE).