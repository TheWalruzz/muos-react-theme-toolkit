import { CSSProperties, ReactNode } from "react";
import { useResolution } from "../../context/ResolutionContext";
import { useContextRef } from "react-context-refs";
import { Resolution } from "../../types";

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
    <div>
      {path}
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
