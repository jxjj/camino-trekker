<template>
  <AppHeader class="tour-page__app-header">
    <img :src="umnLogo" alt="University of Minnesota" />
    <h1>Camino</h1>
  </AppHeader>
  <main>
    <div v-if="!data.tour" class="loading">Loading...</div>
    <header v-if="data.tour" class="tour-header">
      <h2 class="tour-header__title">Stone Arch Bridge</h2>
      <p class="tour-header__subtitle">Minneapolis, MN</p>
      <TourAuthor :author="data.tour.author" />
    </header>
    <pre>{{ data.tour }}</pre>
  </main>
</template>
<script setup>
import AppHeader from "../components/AppHeader.vue";
import umnLogo from "../assets/umn-logo.svg";
// import TourAuthor from "../components/TourAuthor.vue";
import { ToursService } from "../common/api.service.js";
import { reactive, onMounted } from "vue";
import TourAuthor from "../components/TourAuthor.vue";

const props = defineProps({
  tourId: {
    type: Number,
    required: true,
  },
  stopId: {
    type: Number,
    default: 0,
  },
});

const data = reactive({
  tour: null,
});

onMounted(async () => {
  data.tour = await toursService.get(props.tourId).catch(console.error);
});
</script>
<style scoped>
.tour-page__app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
