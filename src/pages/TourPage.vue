<template>
  <div class="tour-page">
    <AppHeader class="tour-page__app-header" />
    <div v-if="isLoading" class="loading">Loading...</div>
    <div v-if="!isLoading">
      <TourStop />
      <BottomNav />
    </div>
  </div>
</template>
<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import AppHeader from "../components/AppHeader.vue";
import BottomNav from "../components/BottomNav.vue";
import TourStop from "../components/TourStop.vue";

const store = useStore();
const isLoading = computed(() => store.state.isLoading);

onMounted(() => {
  store.dispatch("fetchTour", store.state.route.params.tourId);
});
</script>
<style scoped>
.tour-page {
  background: var(--blue-light);
  height: 100%;
}

.tour-page__app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.tour-page__main {
  padding-top: 3.5rem;
}

.tour-page__stages {
  background: var(--white);
  border-radius: 2rem 2rem 0 0;
  padding-bottom: 10rem;
}

.tour-page__fab-next {
  position: fixed;
  bottom: 6rem;
  right: 2rem;
}
</style>
