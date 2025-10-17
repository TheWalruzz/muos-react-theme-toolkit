import { importBinaryAssets } from "@/utils/importAssets";

export const glyphAssets = importBinaryAssets(
  import.meta.glob("./**/*.{png,bmp,gif}", {
    eager: true,
    query: "?data-url",
    import: "default",
  })
);
