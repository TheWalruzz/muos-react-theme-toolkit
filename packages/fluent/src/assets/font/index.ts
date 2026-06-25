import { importBinaryAssets } from "@mustardos-react-ttk/core";

export const fontAssets = importBinaryAssets(
  import.meta.glob("./**/*.{ttf,bin}", {
    eager: true,
    query: "?data-url",
    import: "default",
  }),
);
