import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import TourPage from "./pages/TourPage.vue";

const routes = [
  { path: "/", component: HomePage },
  {
    path: "/tour/:tourId",
    component: TourPage,
    props: (route) => ({
      tourId: Number.parseInt(route.params.tourId, 10),
    }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
