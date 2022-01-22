<template>
  <div class="tour-page">
    <AppHeader class="tour-page__app-header" />
    <div v-if="isLoading" class="loading">Loading...</div>
    <div v-if="!isLoading">
      <div class="page-slides__container">
        <div
          class="page-slides"
          :style="{
            transform: 'translateX(calc(-100vw - 1rem))',
          }"
        >
          <div class="slide slide--prev">
            <h1>Previous Page</h1>
          </div>
          <div
            class="slide slide--current"
            @pointerdown="handlePointerDown"
            @pointerup="handlePointerUp"
            @pointermove="handlePointerMove"
          >
            <TourStop />
          </div>
          <div class="slide slide--next">
            <h1>Next Page</h1>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  </div>
</template>
<script setup>
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import AppHeader from "../components/AppHeader/AppHeader.vue";
import BottomNav from "../components/BottomNav/BottomNav.vue";
import TourStop from "../components/TourStop/TourStop.vue";

const store = useStore();
const isLoading = computed(() => store.state.isLoading);

onMounted(() => {
  store.dispatch("fetchTour", store.state.route.params.tourId);
});

// using regular rather than reactive variables
// to prevent accidentally triggering a redraw until
// requestAnimationFrame
let startX = null;
let currentX = null;

// update this within requestAnimationFrame callback
const translateX = ref(null);

function handlePointerDown(event) {
  startX = currentX = event.pageX;
  console.log("start", { event, startX, currentX });
}
function handlePointerUp(event) {
  currentX = event.pageX;
  console.log("up", { event, startX, currentX });
  // probably update translateX here too
  translateX.value = currentX - startX;

  startX = currentX = null;
}

let rafPending = false;
function updateTranslateX() {
  translateX.value = currentX - startX;
  console.log({ translateX: translateX.value });
  rafPending = false;
}

function handlePointerMove(event) {
  if (startX === null) return;
  currentX = event.pageX;

  // skip queueing a redraw if there's already one pending
  if (rafPending) return;

  rafPending = true;
  window.requestAnimationFrame(updateTranslateX);
}
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

.page-slides {
  display: grid;
  grid-template-columns: repeat(3, 100vw);
  gap: 1rem;
}

.page-slides__container {
  position: relative;
  border: 1rem solid blue;
  overflow: hidden;
  width: 100%;
}
</style>
