import { Styles } from "@/types";

// modified from: https://medium.com/@techsolutionsx/converting-rgba-to-hex-in-javascript-a-comprehensive-guide-908fbb1d13cf
function rgbaToHex(colorStr: string) {
  return colorStr
    .replace(/^rgba?\(|\s+|\)$/g, "") // Gets rgba / rgb string values
    .split(",") // splits them at ","
    .filter((_, index) => index !== 3) // Remove alpha, since themes can't use them in colors
    .map((value) => parseFloat(value)) // Converts them to numbers
    .map((value) => value.toString(16)) // Converts numbers to hex
    .map((value) => (value.length === 1 ? "0" + value : value)) // Adds 0 when length of one number is 1
    .join("");
}

function rgbaToAlpha(colorStr: string) {
  return colorStr
    .replace(/^rgba\(|\s+|\)$/g, "")
    .split(",")
    .filter((_, index) => index === 3)
    .map((value) => parseFloat(value))
    .map((value) => Math.round(value * 255))
    .pop()!;
}

export function colorVar(styles: Styles | undefined, key: `--${string}`) {
  if (!styles || !styles[key]) {
    console.error(`Invalid variable '${key}!`);
    return "";
  }

  if (styles[key].startsWith("rgb")) {
    // convert to hex
    return rgbaToHex(styles[key]);
  }

  // it's a regular hex value, so strip the hex
  return styles[key].replace(/^#/, "");
}

/** Extracts alpha value from rgba() colors */
export function colorAlphaVar(styles: Styles | undefined, key: `--${string}`) {
  if (!styles || !styles[key] || !styles[key].startsWith("rgba")) {
    console.error(`Invalid variable '${key}!`);
    return 255;
  }

  return rgbaToAlpha(styles[key]);
}

export function pxVar(styles: Styles | undefined, key: `--${string}`) {
  if (!styles || !styles[key]) {
    console.error(`Invalid variable '${key}!`);
    return 0;
  }

  return Number(styles[key].replace("px", ""));
}

export function numberVar(styles: Styles | undefined, key: `--${string}`) {
  if (!styles || !styles[key]) {
    console.error(`Invalid variable '${key}!`);
    return 0;
  }

  return Number(styles[key]);
}
