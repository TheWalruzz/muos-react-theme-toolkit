import { AssetConfig } from "@/types";

export function importBinaryAssets(globResults: Record<string, string>) {
  return Object.keys(globResults).map((filePath) => ({
    type: "dataUrl",
    path: filePath.replace(/^.\//, ""),
    data: globResults[filePath],
  })) as AssetConfig[];
}

export function importTextAssets(globResults: Record<string, string>) {
  return Object.keys(globResults).map((filePath) => ({
    type: "text",
    path: filePath.replace(/^.\//, ""),
    data: globResults[filePath],
  })) as AssetConfig[];
}
