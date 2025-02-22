import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    svelte(),
    legacy({
      targets: ["defaults", "chrome >= 47"],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        svelte: resolve(__dirname, "svelte-index.html"),
      },
    },
  },
});
