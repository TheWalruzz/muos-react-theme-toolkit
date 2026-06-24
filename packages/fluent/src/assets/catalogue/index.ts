import { importTextAssets } from "@/utils/importAssets";

export const catalogueAssets = importTextAssets(
  import.meta.glob("./**/*.svg", {
    eager: true,
    query: "?raw",
    import: "default",
  }),
);
