import { ResolutionContext } from "@/context/ResolutionContext";
import { ScreenView } from "./ScreenView";
import { resolutions } from "@/resolutions";
import { ScreenConfig } from "@/types";

import "./ThemeDisplay.css";

interface Props {
  screens: ScreenConfig[];
}

export function ThemeDisplay({ screens }: Props) {
  return (
    <div className="ThemeDisplay">
      {resolutions.map((resolution) => (
        <div
          key={`${resolution.width}x${resolution.height}`}
          className="ThemeDisplay_list"
        >
          <h2>
            {resolution.width}x{resolution.height}
          </h2>
          {screens.map((screen, index) => (
            <ResolutionContext.Provider
              key={`${resolution.width}x${resolution.height}-screen-${screen.path}-${index}`}
              value={screen.overrideResolution?.(resolution) ?? resolution}
            >
              <ScreenView resolutionGroup={resolution} {...screen} />
            </ResolutionContext.Provider>
          ))}
        </div>
      ))}
    </div>
  );
}
