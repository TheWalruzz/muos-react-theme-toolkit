import { AssetConfig } from "@/types";

export function importAssets(
  globResults: Record<string, string>,
  type: AssetConfig["type"]
) {
  return Object.keys(globResults).map((filePath) => ({
    type,
    path: filePath.replace(/^.\//, ""),
    data: globResults[filePath],
  })) as AssetConfig[];
}
