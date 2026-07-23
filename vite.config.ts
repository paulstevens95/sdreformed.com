import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" keeps asset paths relative, so the build works on any GitHub Pages
// URL (user OR project pages) with no rename. Combined with HashRouter, routing
// needs no 404.html fallback.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
