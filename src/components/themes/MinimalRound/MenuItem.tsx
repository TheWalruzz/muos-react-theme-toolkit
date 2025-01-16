import classNames from "classnames";
import { ReactNode } from "react";

import "./MenuItem.css";

interface Props {
  icon: ReactNode;
  text: string;
  active: boolean;
}

export function MenuItem({ icon, text, active }: Props) {
  return (
    <div
      className={classNames("MenuItem", {
        MenuItem_active: active,
      })}
    >
      <div className="MenuItem_icon">{icon}</div>
      <div className="MenuItem_text">{text}</div>
    </div>
  );
}
