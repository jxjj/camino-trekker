<template>
  <div class="page">
    <AppHeader class="tour-page__app-header">
      <img :src="umnLogo" alt="University of Minnesota" />
      <h1>Camino</h1>
    </AppHeader>
    <main>
      <div v-if="isLoading" class="loading">Loading...</div>

      <div v-if="errors.length">
        <pre>{{ errors.join("\n") }}</pre>
      </div>

      <header v-if="tour" class="tour-header">
        <h2 class="tour-header__title">Stone Arch Bridge</h2>
        <p class="tour-header__subtitle">Minneapolis, MN</p>
        <TourAuthor :author="tour.author" />
      </header>
      <pre>{{ tour }}</pre>
    </main>
  </div>
</template>
<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import AppHeader from "../components/AppHeader.vue";
import TourAuthor from "../components/TourAuthor.vue";

import umnLogo from "../assets/umn-logo.svg";

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

const store = useStore();
const tour = computed(() => store.state.tour);
const isLoading = computed(() => store.state.isLoading);
const errors = computed(() => store.state.errors);

onMounted(() => {
  store.dispatch("fetchTour", props.tourId);
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
