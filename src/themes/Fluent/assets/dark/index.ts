import { importBinaryAssets } from "@/utils/importAssets";

export const darkIcons = importBinaryAssets(
  import.meta.glob("./catalogue/**/*.png", {
    eager: true,
    query: "?data-url",
    import: "default",
  })
);
