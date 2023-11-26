import { resolve } from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: resolve(__dirname, "src", "assets", "*.svg"),
          dest: resolve(__dirname, "dist", "assets"),
        },
      ],
    }),
  ],
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
