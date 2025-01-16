import { RefProvider } from "react-context-refs";
import { ThemeDisplay } from "./components/ThemeDisplay";
import { screens } from "./config";
import { ToolBar } from "./components/ToolBar";

export function App() {
  return (
    <RefProvider>
      <ToolBar />
      <ThemeDisplay screens={screens} />
    </RefProvider>
  );
}
