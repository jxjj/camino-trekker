import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import TourPage from "./pages/TourPage.vue";

const toInt = (str) => Number.parseInt(str, 10);

const routes = [
  { path: "/", component: HomePage },
  {
    path: "/tours/:tourId/stops/:stopIndex",
    component: TourPage,
    props: (route) => ({
      tourId: toInt(route.params.tourId),
      stopIndex: toInt(route.params.stopIndex),
    }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
