<template>
  <div class="tour-page">
    <AppHeader class="tour-page__app-header" />
    <div v-if="isLoading" class="loading">Loading...</div>
    <div v-if="!isLoading && !!tour">
      <LocaleProvider :locales="locales">
        <main class="tour-page__main">
          <TourHeader
            v-if="props.stopIndex === 0"
            class="container"
            :tour="tour"
            :stopIndex="props.stopIndex"
          />
          <StopHeader
            v-else
            :stop="tour.stops[props.stopIndex]"
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
              <Button
                v-if="hasNextStop"
                icon="arrow_forward"
                iconPosition="end"
                variant="primary"
                @click="$router.push(nextStopRoute)"
              >
                Continue
              </Button>
            </footer>
            <router-link v-if="hasNextStop" :to="nextStopRoute">
              <FAB
                class="tour-page__fab-next"
                icon="arrow_forward"
                alt="Next Stop"
              />
            </router-link>
          </div>
        </main>
        <BottomNav v-if="tour" :stopIndex="stopIndex" :tour="tour" />
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
import Separator from "../components/stages/Separator.vue";
import StopHeader from "../components/StopHeader.vue";

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
  ["separator", Separator],
]);
const getComponentForStageType = (type) => stageComponents.get(type);

const store = useStore();
const tour = computed(() => store.state.tour);
const currentStop = computed(() => store.state.tour.stops[props.stopIndex]);
const isLoading = computed(() => store.state.isLoading);
const locales = computed(() => tour.value.tour_content.languages);
const hasNextStop = computed(
  () => props.stopIndex < tour.value.stops.length - 1
);
const nextStopRoute = computed(() =>
  hasNextStop.value
    ? `/tours/${tour.value.id}/stops/${props.stopIndex + 1}`
    : null
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
