import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: "named",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
  ],
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@context": "/src/context",
      "@layout": "/src/layout",
      "@pages": "/src/pages",
      "@routes": "/src/routes",
      "@styles": "/src/styles",
    },
  },
});
