import { importTextAssets } from "@mustardos-react-ttk/core";

export const carouselCatalogueAssets = importTextAssets(
  import.meta.glob("./**/*.svg", {
    eager: true,
    query: "?raw",
    import: "default",
  }),
);
