import { importAssets } from "@/utils/importAssets";

export const assets = [
  ...importAssets(
    import.meta.glob("./glyph/**/*.{png,bmp,gif}", {
      eager: true,
      query: "?data-url",
      import: "default",
    }),
    "dataUrl"
  ),
  ...importAssets(
    import.meta.glob("./image/**/*.{png,bmp,gif}", {
      eager: true,
      query: "?data-url",
      import: "default",
    }),
    "dataUrl"
  ),
  ...importAssets(
    import.meta.glob("./rgb/**/*.{sh,txt}", {
      eager: true,
      query: "?raw",
      import: "default",
    }),
    "text"
  ),
  ...importAssets(
    import.meta.glob("./sound/**/*.wav", {
      eager: true,
      query: "?data-url",
      import: "default",
    }),
    "dataUrl"
  ),
];
