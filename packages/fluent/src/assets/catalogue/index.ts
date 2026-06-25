import { importTextAssets } from "@mustardos-react-ttk/core";

export const catalogueAssets = importTextAssets(
  import.meta.glob("./**/*.svg", {
    eager: true,
    query: "?raw",
    import: "default",
  }),
);
