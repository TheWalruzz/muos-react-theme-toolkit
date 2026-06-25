import { defineConfig, esmExternalRequirePlugin } from "vite";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname, "src/"),
    },
  },
  build: {
    lib: {
      entry: resolve(import.meta.dirname, "src/main.ts"),
      name: "@mustardos-react-ttk/core",
      fileName: "mustardos-react-ttk-core",
    },
    rolldownOptions: {
      plugins: [
        esmExternalRequirePlugin({
          external: ["react", "react-dom", "i18next", "react-i18next"],
        }),
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          i18next: "i18next",
          "react-i18next": "ReactI18Next",
        },
      },
    },
  },
});
