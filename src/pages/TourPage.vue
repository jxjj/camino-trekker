<template>
  <div class="tour-page">
    <TuckOnScroll>
      <AppHeader class="tour-page__app-header" />
    </TuckOnScroll>
    <div v-if="isLoading" class="loading">Loading...</div>
    <div v-if="!isLoading">
      <TourStopSwiper :tour="tour" :stopIndex="stopIndex" :locale="locale" />
      <BottomNav />
    </div>
  </div>
</template>
<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useStopIndex, useTour, useLocale } from "../common/hooks";

import AppHeader from "../components/AppHeader/AppHeader.vue";
import BottomNav from "../components/BottomNav/BottomNav.vue";
import TourStopSwiper from "../components/TourStopSwiper/TourStopSwiper.vue";
import TuckOnScroll from "../components/TuckOnScroll/TuckOnScroll.vue";

const store = useStore();
const { stopIndex } = useStopIndex();
const { tour } = useTour();
const { locale } = useLocale();
const isLoading = computed(() => store.state.isLoading);

onMounted(() => {
  store.dispatch("fetchTour", store.state.route.params.tourId);
});
</script>
<style scoped>
.tour-page {
  background: var(--black);
  height: 100%;
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
.swiper-slide {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
