import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";
import svgr from "vite-plugin-svgr";
import path from "path";

export default defineConfig({
    plugins: [react(), svgr(), dts({ insertTypesEntry: true, exclude: ["**/*.stories.ts", "**/*.test.tsx"] })],
    build: {
        lib: {
            entry: "./src/index.ts",
            name: "ui-components",
            fileName: (format) => `ui-components.${format}.js`,
            formats: ["es", "cjs", "umd"],
        },
        rollupOptions: {
            external: Object.keys(peerDependencies),
            output: { globals: { react: "React", "react-dom": "ReactDOM" } },
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
