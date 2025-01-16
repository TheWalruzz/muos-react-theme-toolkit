import { Default } from "./Default";
import { MenuItem } from "./MenuItem";
import { ReactNode } from "react";
import classNames from "classnames";

import "./SingleItemScreen.css";

interface Props {
  icon: ReactNode;
  text: string;
  centered?: boolean;
}

export function SingleItemScreen({ icon, text, centered = true }: Props) {
  return (
    <Default>
      <div className={classNames("SingleItemScreen", { centered })}>
        <MenuItem active icon={icon} text={text} />
      </div>
    </Default>
  );
}
