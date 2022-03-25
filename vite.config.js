import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // load env variables for config to use
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
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
      sourcemap: true,
    },
    server: {
      https: {
        key: "./.cert/key.pem",
        cert: "./.cert/cert.pem",
      },
    },
    base: process.env.VITE_BASE_DIR || "/",
  };
});
