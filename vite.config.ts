import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";

export default defineConfig({
    plugins: [react(), dts({ exclude: "**/*.stories.ts", insertTypesEntry: true, })],
    build: {
        lib: {
            entry: "./src/index.ts",
            name: "ui-components",
            formats: ["es", "cjs", "umd"],
            fileName: (format) => `ui-components.${format}.js`,

        },
        rollupOptions: {
            external: Object.keys(peerDependencies),
            output: { globals: { react: "React", "react-dom": "ReactDOM" } },
        },
    },
});
