import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [vue(), eslintPlugin()],
  resolve: {
    ...(mode === "production" && {
      alias: {
        "vue-types": "vue-types/shim",
      },
    }),
  },
}));
