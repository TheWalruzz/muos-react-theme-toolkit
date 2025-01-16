import { RefProvider } from "react-context-refs";
import { ThemeDisplay } from "./components/tools/ThemeDisplay";
import { LanguageSelector } from "./components/tools/LanguageSelector";
import { ImageDownloadButton } from "./components/tools/ImageDownloadButton";
import { screens } from "./screens";

export function App() {
  return (
    <RefProvider>
      <LanguageSelector />
      <ImageDownloadButton />
      <ThemeDisplay screens={screens} />
    </RefProvider>
  );
}
