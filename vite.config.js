import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [
        tailwindcss(),
        svgr(),
    ],
});