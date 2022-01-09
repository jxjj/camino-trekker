<template>
  <Sheet
    class="map-sheet"
    title="Map"
    :is-open="isOpen"
    @close="$emit('close')"
  >
    <TourMap
      :tour="tour"
      :activeStopIndex="activeStopIndex"
      :initialMapStyle="dark"
    />
  </Sheet>
</template>
<script setup>
import { ref, inject } from "vue";
import Sheet from "./Sheet.vue";
import Map from "./map/Map.vue";
import MapPolyline from "./map/MapPolyline.vue";
import MapMarker from "./map/MapMarker.vue";
import getFullTourRoute from "../utils/getFullTourRoute.js";
import getAllStopPoints from "../utils/getAllStopPoints.js";
import getBoundingBox from "../utils/getBoundingBox";
import getAllRoutes from "../utils/getAllRoutes";
import Button from "./Button.vue";
import MapPopup from "./map/MapPopup.vue";
import TourMap from "./map/TourMap.vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  tour: {
    type: Object,
    isRequired: true,
  },
  activeStopIndex: {
    type: Number,
    default: 0,
  },
});

defineEmits(["close"]);
const locale = inject("currentLocale", "en");

const fullTourRoute = getFullTourRoute(props.tour);
const stopPoints = getAllStopPoints(props.tour);
const startPoint = stopPoints[0];
const initialMapBounds = getBoundingBox(fullTourRoute);
const stopRoutes = getAllRoutes(props.tour);

const getStopColor = (stopIndex) => {
  if (stopIndex < props.activeStopIndex) {
    // already visited
    return "#7EEAFC";
  }
  if (stopIndex === props.activeStopIndex) {
    return "#0A84FF";
  }
  return "#999";
};
</script>

<style>
.map-sheet .sheet__header {
  border-bottom: 0;
  margin-bottom: 0;
}
</style>
