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


## Getting started

Run those commands to install necessary packages and run the dev server.

* npm install
* npm run dev

Navigate to http://localhost:5173/ and you'll see a (very) simple page that renders all configured components in provided resolutions, so you can preview them and debug any issues. It supports Hot Module Reloading, so each change you make to your screen components will be immediately applied to the page.

There, you can click the Download button to generate and download a ZIP file with all the images and schemes.

## Developing themes

### Main theme configuration

Since you might be working on several themes in one repository, put your screen components and schemes in `src/themes/THEME_NAME` and create an `index.tsx` file that exports a config object for that theme.

In general, it should look like this:

```tsx
export const config: ThemeConfig = {
  name: "My Theme",
  screens: [
    // your screen configs go here
  ],
  schemes: [
    // your scheme configs go here
  ],
  languages: ['en', 'pl'], // languages to generate images in
  fallbackLanguage: 'en', // default language for the theme
}
```

Each theme config can then be imported into `src/config.ts` into an array of themes visible by the app:

```ts
import { ThemeConfig } from "./types";
import { config as minimalRound } from "./themes/MinimalRound";
import { config as myTheme } from "./themes/MyTheme";

export const themes: ThemeConfig[] = [
  minimalRound,
  myTheme,
];
```

You will be now able to select your theme from the dropdown next to the download button and see how it looks in different resolutions and languages.

### Screen configuration

The `screens` part of a theme config should look like this:

```tsx
export const config: ThemeConfig = {
  // ...
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
    // ...other screens
  ],
  // ...
}
```

`path` property is the path to the image in the theme. As an example, providing the path `image/wall/default.png` will generate images in different resolution folders, e.g. `640x480/image/wall/default.png`, `720x480/image/wall/default.png`. The extension of the file matters, as this tool can generate only `.png` and `.bmp` files.

`render` function binds the path to the component that will be rendered as the screen.

Optionally, you can provide an `overrideResolution` function that will force that single screen to be generated at a different resolution from the rest. This is useful for generating preview images. The parameter passed to that function is the original resolution, so you can make changes accordingly. It expects `{ width: number; height: number; }` as a return value. 

#### Screen creation and styling

Each screen is a simple component that can be styled however you want, but keep in mind that you have to use `var(--width)` and `var(--height)` CSS variables to know the current resolution. Resolution can also be retrieved programatically using a `useResolution` hook:

```ts
const { width, height } = useResolution();
```

Example screens are a good way to see how it all works in practice. Of course, you're more than welcome to change things up and provide your own solutions. This is still technically a React app, so go wild!

### Scheme configuration

The `schemes` part of a theme config should look like this:

```tsx
export const config: ThemeConfig = {
  // ...
  schemes: [
    {
      path: "scheme/default.txt",
      scheme: defaultScheme, // scheme template
    },
    {
      path: "scheme/muxlaunch.txt",
      scheme: muxlaunchScheme, // scheme template
    },
    // ...other schemes
  ],
  // ...
}
```

When creating a ZIP, those schemes will be generated in every resolution's folder as expected.

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

### Localization

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

Language codes used as keys in that object should correspond to the languages used by muOS, you can see the list of them in `src/i18n.ts` in `languageMap` object.

#### Language configuration for a theme

The `languages` and `fallbackLanguage` parts of a theme config should look like this:

```ts
export const config: ThemeConfig = {
  // ...
  languages: ["en"], // ...and more languages
  fallbackLanguage: "en",
};
```

`languages` array denotes which languages to use while rendering and generating images.

Like when adding new language JSON files, those language codes must correspond to the ones used internally by the app and muOS.

Toolkit will generate images in those set languages in subfolders like `640x480/image/Polish/...`, so that they will be recognizeable by muOS.

`fallbackLanguage` is the default language that the app (and muOS) will use when system language is not available in the theme.

Fallback language will not create a subfolder, like other languages.

### Building fonts

You can build binary version of the font used with the included script. As an example, the font included in the example theme can be built with support for Polish characters using:

```
npm run font:generate -- --font "./public/fonts/Dimica/Dimica-Light.otf" -r 0x00-0x017F
```

This will generate `default.bin` file in `generated` folder.

Refer to https://muos.dev/themes/fonts.html for more info on how it all works.

# License
Distributed under the [MIT License](https://github.com/TheWalruzz/muos-react-theme-toolkit/blob/main/LICENSE).