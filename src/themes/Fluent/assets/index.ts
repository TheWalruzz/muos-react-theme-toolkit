import { importBinaryAssets } from "@/utils/importAssets";
import { fontAssets } from "./font";
import { glyphAssets } from "./glyph";

export const assets = [
  ...glyphAssets,
  ...fontAssets,
  ...importBinaryAssets(
    import.meta.glob("./catalogue/**/*.png", {
      eager: true,
      query: "?data-url",
      import: "default",
    })
  ),
];
