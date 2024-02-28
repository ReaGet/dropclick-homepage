import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import svgr from "vite-plugin-svgr";
import { resolve } from "path";

export default defineConfig({
    build: {
        outDir: "docs",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                results: resolve(__dirname, "results/index.html"),
            },
            output: {
                assetFileNames: (assetInfo) => {
                    let extType = assetInfo.name.split('.').at(1);
                    console.log(assetInfo.name)
                    if (/png|jpe?g|gif|tiff|bmp|ico/i.test(extType)) {
                        extType = "img";
                    } else if (/svg/i.test(extType)) {
                        extType = "svg";
                    } else if (/woff2|ttf|woff/i.test(extType)) {
                        extType = "fonts";
                    } else if (/css/i.test(extType)) {
                        extType = "css";
                    }
//                     return `assets/${extType}/[name]-[hash][extname]`;
                    return `assets/${extType}/[name][extname]`;
                },
                entryFileNames: "assets/js/[name].js",
            },
        },
    },
    plugins: [
        tailwindcss(),
        svgr(),
    ],
});
