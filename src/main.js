import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import App from "./App.vue";

const routes = [
  { path: "/", component: HomePage },
  // { path: "/tour/:tourId", component: TourPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App).use(router).mount("#app");
