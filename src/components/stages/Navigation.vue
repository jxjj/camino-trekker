<template>
  <div class="navigation-stage">
    <div class="navigation-stage__tour-map-wrapper">
      <TourMap
        initialMapStyle="streets"
        :initialMapBounds="boundingBox"
        :zoom="18"
      />
    </div>
    <Markdown :content="markdown" />
  </div>
</template>
<script setup>
import { inject, computed } from "vue";
import { shape } from "vue-types";
import Markdown from "../Markdown.vue";
import TourMap from "../map/TourMap.vue";
import getAllRoutes from "../../utils/getAllRoutes";
import getAllStopPoints from "../../utils/getAllStopPoints";
import getBoundingBox from "../../utils/getBoundingBox";

const props = defineProps({
  stage: shape({
    // I18n object like: { en: 'hello', es: 'hola'}
    text: Object,
  }).loose,
});

const locale = inject("locale", "en");
const markdown = computed(() => props.stage.text[locale]);

// focus the map on navigating to this stop
// we'll need to create a bounding box using:
// last stop target, route, and current stop target
const tour = inject("tour");
const stopIndex = inject("stopIndex");
const routes = getAllRoutes(tour);
const stopPoints = getAllStopPoints(tour);
const prevStopPoint = stopIndex > 0 ? stopPoints[stopIndex - 1] : null;
const currentRoute = routes[stopIndex];
const currentStopPoint = stopPoints[stopIndex];

// the list of points we want to create a bounding box around. The
// .filter(Boolean) removes any null values in case prevStopPoint is null.
const pointsForBoundingBox = [
  prevStopPoint,
  ...currentRoute,
  currentStopPoint,
].filter(Boolean);
const boundingBox = getBoundingBox(pointsForBoundingBox);
console.log({ boundingBox });
</script>
<style>
.navigation-stage__tour-map-wrapper {
  height: 50vh;
}
</style>
