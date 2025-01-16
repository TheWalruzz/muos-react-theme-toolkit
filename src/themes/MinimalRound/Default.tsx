import { PropsWithChildren } from "react";

import "./Default.css";

export function Default({ children }: PropsWithChildren) {
  return <div className="Default">{children}</div>;
}
