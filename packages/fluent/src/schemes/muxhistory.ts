import { numberVar, type Scheme } from "@mustardos-react-ttk/core";

export const muxhistoryScheme: Scheme = ({ height, width }, styles) => `[list]
LIST_DEFAULT_LABEL_LONG_MODE = 1

[misc]
CONTENT_WIDTH = ${Math.round(width / 2 - Math.round(height / numberVar(styles, "--padding-divider")))}
`;
