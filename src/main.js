import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";

// Fonts
import "@fontsource/poppins";
import "@fontsource/material-icons";

// Global CSS
import "normalize.css";
import "./main.css";

const app = createApp(App).use(router).mount("#app");
