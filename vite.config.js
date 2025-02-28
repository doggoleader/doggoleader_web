import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "public/index.html"),
                gallery: path.resolve(__dirname, "public/pages/gallery.html"),
            },
            output: {
                entryFileNames: "js/[name].js", // Output JS files in /public/js/
            },
        },
    },
    server: {
        open: "/public/index.html", // Opens the correct page on dev start
    },
});