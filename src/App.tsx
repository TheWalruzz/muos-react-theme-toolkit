import { RefProvider } from "react-context-refs";
import { ThemeDisplay } from "./components/ThemeDisplay";
import { ToolBar } from "./components/ToolBar";

export function App() {
  return (
    <RefProvider>
      <ToolBar />
      <ThemeDisplay />
    </RefProvider>
  );
}
