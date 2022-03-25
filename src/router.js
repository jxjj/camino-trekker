import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import TourPage from "./pages/TourPage.vue";
import SettingsPage from "./pages/SettingsPage.vue";
import HelpPage from "./pages/HelpPage.vue";
import config from "./config";

const routes = [
  { path: "/", component: HomePage },
  {
    path: "/tours/:tourId/stops/:stopIndex",
    component: TourPage,
  },
  {
    path: "/settings",
    component: SettingsPage,
  },
  {
    path: "/help",
    component: HelpPage,
  },
];

const router = createRouter({
  history: createWebHistory(config.baseDir),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
