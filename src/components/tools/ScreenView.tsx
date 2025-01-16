import { CSSProperties, ReactNode } from "react";
import { useResolution } from "@/context/ResolutionContext";
import { useContextRef } from "react-context-refs";
import { Resolution } from "@/types";

import "./ScreenView.css";

interface Props {
  path: string;
  render: () => ReactNode;
  resolutionGroup: Resolution;
}

export function ScreenView({ path, render, resolutionGroup }: Props) {
  const { width, height } = useResolution();
  const setRef = useContextRef({
    path,
    width: resolutionGroup.width,
    height: resolutionGroup.height,
  });

  return (
    <div className="ScreenView">
      <div className="ScreenView_path">{path}</div>
      <div
        ref={setRef}
        style={
          {
            width,
            height,
            maxWidth: width,
            maxHeight: height,
            overflow: "hidden",
            "--width": `${width}px`,
            "--height": `${height}px`,
          } as CSSProperties
        }
      >
        {render()}
      </div>
    </div>
  );
}
