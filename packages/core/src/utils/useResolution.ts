import { ResolutionContext } from "@/ui/context/ResolutionContext";
import { useContext } from "react";

export const useResolution = () => useContext(ResolutionContext);
