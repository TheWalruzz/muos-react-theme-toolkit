import { Styles } from "@/types";

export function colorVar(styles: Styles | undefined, key: `--${string}`) {
  if (!styles || !styles[key]) {
    return "";
  }

  return styles[key].replace(/^#/, "");
}

export function pxVar(styles: Styles | undefined, key: `--${string}`) {
  if (!styles || !styles[key]) {
    return 0;
  }

  return Number(styles[key].replace("px", ""));
}
