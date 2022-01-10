<template>
  <div class="navigation-stage">
    <div class="navigation-stage__tour-map-wrapper">
      <TourMap
        initialMapStyle="satellite"
        :tour="tour"
        :stopIndex="stopIndex"
        :initialMapBounds="boundingBox"
        :zoom="18"
        :locale="locale"
      />
    </div>
    <Markdown :content="markdown" />
  </div>
</template>
<script setup>
import { computed } from "vue";
import { shape, string } from "vue-types";
import Markdown from "../Markdown.vue";
import TourMap from "../map/TourMap.vue";
import getAllRoutes from "../../utils/getAllRoutes";
import getAllStopPoints from "../../utils/getAllStopPoints";
import getBoundingBox from "../../utils/getBoundingBox";
import { useStore } from "vuex";

const props = defineProps({
  stage: shape({
    // I18n object like: { en: 'hello', es: 'hola'}
    text: Object,
  }).loose,
  locale: string().isRequired,
});

const markdown = computed(() => props.stage.text[props.locale]);

// focus the map on navigating to this stop
// we'll need to create a bounding box using:
// last stop target, route, and current stop target

const store = useStore();
const tour = computed(() => store.state.tour);
const stopIndex = computed(() => store.getters.stopIndex);
const routes = computed(() => getAllRoutes(tour.value));
const stopPoints = computed(() => getAllStopPoints(tour.value));
const prevStopPoint =
  stopIndex.value > 0 ? stopPoints.value[stopIndex.value - 1] : null;
const currentRoute = routes.value[stopIndex.value];
const currentStopPoint = stopPoints.value[stopIndex.value];

// the list of points we want to create a bounding box around. The
// .filter(Boolean) removes any null values in case prevStopPoint is null.
const pointsForBoundingBox = [
  prevStopPoint,
  ...currentRoute,
  currentStopPoint,
].filter(Boolean);
const boundingBox = getBoundingBox(pointsForBoundingBox);
</script>
<style>
.navigation-stage__tour-map-wrapper {
  height: 50vh;
}
</style>
