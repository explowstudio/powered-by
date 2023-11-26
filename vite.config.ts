import { resolve } from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import * as packageJson from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve("src", "react", "index.ts"),
      name: "PoweredBy",
      formats: ["es", "umd"],
      fileName: (format) => `explow-studio-powered-by.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.dependencies)],
    },
  },
});
