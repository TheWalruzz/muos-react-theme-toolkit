import { RefProvider } from "react-context-refs";
import { ThemeDisplay } from "./components/ThemeDisplay";
import { ToolBar } from "./components/ToolBar";
import { CurrentThemeContextProvider } from "./components/CurrentThemeContextProvider";

export function App() {
  return (
    <RefProvider>
      <CurrentThemeContextProvider>
        <ToolBar />
        <ThemeDisplay />
      </CurrentThemeContextProvider>
    </RefProvider>
  );
}
