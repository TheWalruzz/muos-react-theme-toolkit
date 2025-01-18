import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { dataUrl } from "vite-plugin-data-url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dataUrl({ limit: 1000 * 1024 }), // 1 MB limit - change it if you need to
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
