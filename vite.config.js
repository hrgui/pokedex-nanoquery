import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "chrome >= 47"],
    }),
    tailwindcss(),
  ],
});
