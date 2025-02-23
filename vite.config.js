import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "chrome >= 47"],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        react: resolve(__dirname, "index.html"),
      },
    },
  },
});
