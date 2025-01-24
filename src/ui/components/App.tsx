import { RefProvider } from "react-context-refs";
import { ThemeDisplay } from "./ThemeDisplay";
import { ToolBar } from "./ToolBar";
import { CurrentThemeContextProvider } from "./CurrentThemeContextProvider";

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
