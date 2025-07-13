import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), dts()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "MetaMatrice",
      fileName: (format) => `meta-matrice.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      // Externalize React to avoid bundling it
      external: ["react", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
    },
  },
});
