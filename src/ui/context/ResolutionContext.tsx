import { createContext } from "react";
import { Resolution } from "@/types";

export const ResolutionContext = createContext<Resolution>({
  width: 640,
  height: 480,
});
