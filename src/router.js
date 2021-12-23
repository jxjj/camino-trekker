import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import TourPage from "./pages/TourPage.vue";

const toInt = (str) => Number.parseInt(str, 10);

const routes = [
  { path: "/", component: HomePage },
  {
    path: "/tour/:tourId/:stopId?",
    component: TourPage,
    props: (route) => ({
      tourId: toInt(route.params.tourId),
      stopId: toInt(route.params.stopId),
    }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
