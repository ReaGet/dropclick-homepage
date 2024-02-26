import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    build: {
        outDir: "docs",
    },
    plugins: [
        tailwindcss(),
        svgr(),
    ],
});