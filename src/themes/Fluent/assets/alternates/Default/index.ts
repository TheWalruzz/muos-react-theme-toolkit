import { importTextAssets } from "@/utils/importAssets";

export const defaultCatalogueAssets = importTextAssets(
  import.meta.glob("./**/*.svg", {
    eager: true,
    query: "?raw",
    import: "default",
  }),
);
