import { importTextAssets, importBinaryAssets } from "@/utils/importAssets";

export const assets = [
  ...importBinaryAssets(
    import.meta.glob("./glyph/**/*.{png,bmp,gif}", {
      eager: true,
      query: "?data-url",
      import: "default",
    })
  ),
  ...importBinaryAssets(
    import.meta.glob("./image/**/*.{png,bmp,gif}", {
      eager: true,
      query: "?data-url",
      import: "default",
    })
  ),
  ...importTextAssets(
    import.meta.glob("./rgb/**/*.{sh,txt}", {
      eager: true,
      query: "?raw",
      import: "default",
    })
  ),
  ...importBinaryAssets(
    import.meta.glob("./sound/**/*.wav", {
      eager: true,
      query: "?data-url",
      import: "default",
    })
  ),
];
