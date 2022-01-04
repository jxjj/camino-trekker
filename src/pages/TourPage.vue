<template>
  <div class="tour-page">
    <AppHeader class="tour-page__app-header" />
    <div v-if="isLoading" class="loading">Loading...</div>
    <div v-if="!isLoading && !!tour">
      <LocaleProvider :locales="locales">
        <main class="tour-page__main">
          <TourHeader
            class="container"
            :tour="tour"
            :stopIndex="props.stopIndex"
          />
          <div class="tour-page__stages container">
            <h2 v-if="stopIndex === 0">Start</h2>
            <section
              v-for="stage in currentStop.stop_content.stages"
              :key="stage.id"
            >
              <component
                :is="getComponentForStageType(stage.type)"
                :stage="stage"
              ></component>
            </section>
            <footer class="tour-page__stop-footer">
              <Button icon="arrow_forward" iconPosition="end" variant="primary">
                Continue
              </Button>
            </footer>
            <FAB class="tour-page__fab" :icon="arrow_forward" />
          </div>
        </main>
        <BottomNav v-if="tour" :stopIndex="props.stopIndex" :tour="tour" />
      </LocaleProvider>
    </div>
  </div>
</template>
<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import AppHeader from "../components/AppHeader.vue";
import TourHeader from "../components/TourHeader.vue";
import LanguageSelect from "../components/stages/LanguageSelect.vue";
import Guide from "../components/stages/Guide.vue";
import BottomNav from "../components/BottomNav.vue";
import LocaleProvider from "../components/LocaleProvider.vue";
import Button from "../components/Button.vue";
import FAB from "../components/FAB.vue";

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

const stageComponents = new Map([
  ["language", LanguageSelect],
  ["guide", Guide],
]);
const getComponentForStageType = (type) => stageComponents.get(type);

const store = useStore();
const tour = computed(() => store.state.tour);
const currentStop = computed(() => store.state.tour.stops[props.stopIndex]);
const isLoading = computed(() => store.state.isLoading);
const locales = computed(() => tour.value.tour_content.languages);

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
  padding: 4rem 0;
}

.tour-page__stages {
  background: var(--white);
}

.tour-page__fab {
  position: fixed;
  bottom: 5rem;
  right: 1rem;
}
</style>
