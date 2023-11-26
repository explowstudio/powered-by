import { resolve } from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import * as packageJson from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src", "react", "index.ts"),
        poweredByElement: resolve(
          __dirname,
          "src",
          "html",
          "powered-by.element.js"
        ),
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        format: "es",
        dir: "dist",
      },
    },
  },
});
