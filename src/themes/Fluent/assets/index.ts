import { importBinaryAssets } from "@/utils/importAssets";
import { fontAssets } from "./font";

export const assets = [
  ...importBinaryAssets(
    import.meta.glob("./glyph/**/*.{png,bmp,gif}", {
      eager: true,
      query: "?data-url",
      import: "default",
    })
  ),
  ...fontAssets,
  ...importBinaryAssets(
    import.meta.glob("./catalogue/**/*.png", {
      eager: true,
      query: "?data-url",
      import: "default",
    })
  ),
];
