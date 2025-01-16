import { RefProvider } from "react-context-refs";
import { ThemeDisplay } from "./components/tools/ThemeDisplay";
import { screens } from "./config";
import { ToolBar } from "./components/tools/ToolBar";

export function App() {
  return (
    <RefProvider>
      <ToolBar />
      <ThemeDisplay screens={screens} />
    </RefProvider>
  );
}
