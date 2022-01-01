<template>
  <div class="tour-page">
    <AppHeader class="tour-page__app-header" />
    <main class="tour-page__main container">
      <div v-if="isLoading" class="loading">Loading...</div>

      <div v-if="errors.length">
        <pre>{{ errors.join("\n") }}</pre>
      </div>
      <TourHeader :tour="tour" />
      <div class="card">
        <ol class="tourstop-list">
          <li v-for="stop in tour.stops" :key="stop.id" class="tourstop">
            <pre>{{ stop.stop_content.stages }}</pre>
          </li>
        </ol>
      </div>
    </main>
  </div>
</template>
<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import AppHeader from "../components/AppHeader.vue";
import TourHeader from "../components/TourHeader.vue";

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
const errors = computed(() => store.state.errors);

onMounted(() => {
  store.dispatch("fetchTour", props.tourId);
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
  padding-top: 4rem;
}
</style>
