import { importTextAssets } from "@mustardos-react-ttk/core";

export const defaultCatalogueAssets = importTextAssets(
  import.meta.glob("./**/*.svg", {
    eager: true,
    query: "?raw",
    import: "default",
  }),
);
