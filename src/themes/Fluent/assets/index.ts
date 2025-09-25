import { importBinaryAssets } from "@/utils/importAssets";

export const assets = [
  ...importBinaryAssets(
    import.meta.glob("./glyph/**/*.{png,bmp,gif}", {
      eager: true,
      query: "?data-url",
      import: "default",
    })
  ),
  ...importBinaryAssets(
    import.meta.glob("./font/**/*.bin", {
      eager: true,
      query: "?data-url",
      import: "default",
    })
  ),
  ...importBinaryAssets(
    import.meta.glob("./catalogue/**/*.png", {
      eager: true,
      query: "?data-url",
      import: "default",
    })
  ),
];
