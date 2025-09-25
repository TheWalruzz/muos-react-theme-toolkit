import { Scheme } from "@/types";
import { pxVar } from "@/utils/vars";

export const muxhistoryScheme: Scheme = ({ width }, styles) => `[list]
LIST_DEFAULT_LABEL_LONG_MODE = 1

[misc]
CONTENT_WIDTH = ${Math.round(width / 2 - pxVar(styles, "--padding"))}
`;
