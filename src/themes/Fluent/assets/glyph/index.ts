import { importBinaryAssets, importTextAssets } from "@/utils/importAssets";

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
