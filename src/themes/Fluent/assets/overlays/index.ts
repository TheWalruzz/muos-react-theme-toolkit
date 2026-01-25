import { importBinaryAssets } from "@/utils/importAssets";

export const overlayAssets = importBinaryAssets(
  import.meta.glob("./**/*.{png,bmp,gif}", {
    eager: true,
    query: "?data-url",
    import: "default",
  }),
);
