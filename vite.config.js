import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // a-frame components
          isCustomElement: (tag) => tag.startsWith("a-"),
        },
      },
    }),
  ],
  resolve: {
    ...(mode === "production" && {
      alias: {
        "vue-types": "vue-types/shim",
      },
    }),
  },
  build: {
    sourcemap: "inline",
  },
  server: {
    https: {
      key: "./.cert/key.pem",
      cert: "./.cert/cert.pem",
    },
  },
}));
