import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import "./globalStyles.js";

createApp(App).use(router).mount("#app");
