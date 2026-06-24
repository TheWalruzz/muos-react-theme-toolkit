import { importBinaryAssets } from "@/utils/importAssets";

export const fontAssets = importBinaryAssets(
  import.meta.glob("./**/*.{ttf,bin}", {
    eager: true,
    query: "?data-url",
    import: "default",
  }),
);
