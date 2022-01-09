<template>
  <div class="tour-page">
    <AppHeader class="tour-page__app-header" />
    <div v-if="isLoading" class="loading">Loading...</div>
    <div v-if="!isLoading">
      <LocaleProvider :locales="locales">
        <TourStop
          v-if="tour"
          :stop="currentStop"
          :stopIndex="stopIndex"
          :nextStopUrl="nextStopUrl"
        />
        <BottomNav v-if="tour" :stopIndex="stopIndex" :tour="tour" />
      </LocaleProvider>
    </div>
  </div>
</template>
<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import AppHeader from "../components/AppHeader.vue";
import BottomNav from "../components/BottomNav.vue";
import LocaleProvider from "../components/LocaleProvider.vue";
import TourStop from "../components/TourStop.vue";

const props = defineProps({
  tourId: {
    type: Number,
    required: true,
  },
  stopIndex: {
    type: Number,
    default: 0,
  },
});

const store = useStore();
const tour = computed(() => store.state.tour);

const isLoading = computed(() => store.state.isLoading);
const locales = computed(() => tour.value.tour_content.languages);
const currentStop = computed(() => tour.value.stops[props.stopIndex]);
const totalStops = computed(() => tour.value.stops.length);
const hasNextStop = computed(() => props.stopIndex < totalStops.value - 1);
const nextStopUrl = computed(() =>
  hasNextStop.value ? `/tours/${props.tourId}/stops/${stopIndex + 1}` : null
);

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
