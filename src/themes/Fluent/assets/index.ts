import { catalogueAssets } from "./catalogue";
import { fontAssets } from "./font";
import { glyphAssets } from "./glyph";

export const assets = [...glyphAssets, ...fontAssets, ...catalogueAssets];
