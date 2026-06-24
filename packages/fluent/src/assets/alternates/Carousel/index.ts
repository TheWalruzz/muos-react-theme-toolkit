import { importTextAssets } from "@/utils/importAssets";

export const carouselCatalogueAssets = importTextAssets(
  import.meta.glob("./**/*.svg", {
    eager: true,
    query: "?raw",
    import: "default",
  }),
);
