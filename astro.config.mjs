// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://bhakti-n.github.io",
  base: "/kgb-portfolio",
  vite: {
    plugins: [tailwindcss()],
  },
});
