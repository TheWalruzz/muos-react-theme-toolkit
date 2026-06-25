import {
  importTextAssets,
  importBinaryAssets,
} from "@mustardos-react-ttk/core";

export const glyphAssets = [
  ...importBinaryAssets(
    import.meta.glob("./**/*.{png,bmp,gif}", {
      eager: true,
      query: "?data-url",
      import: "default",
    }),
  ),
  ...importTextAssets(
    import.meta.glob("./**/*.svg", {
      eager: true,
      query: "?raw",
      import: "default",
    }),
  ),
];
