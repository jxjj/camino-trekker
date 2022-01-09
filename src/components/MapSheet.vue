<template>
  <Sheet
    class="map-sheet"
    title="Map"
    :is-open="isOpen"
    @close="$emit('close')"
  >
    <div class="map-sheet__contents">
      <div class="button-bar">
        <Button
          v-for="styleChoice in styleChoices"
          :key="styleChoice"
          variant="inverse"
          @click="handleMapChange(styleChoice)"
          class="button-bar__button"
          :class="{
            'button-bar__button--is-active': isActive(styleChoice),
          }"
          >{{ capitalize(styleChoice) }}</Button
        >
      </div>
      <Map
        :lng="startPoint.lng"
        :lat="startPoint.lat"
        :zoom="15"
        :bounds="initialMapBounds"
        class="map-sheet__map-container"
        :mapStyle="mapStyle"
      >
        <MapPolyline
          v-for="(route, index) in stopRoutes"
          :key="index"
          :positions="route"
          :id="`route-${index}`"
          :color="getStopColor(index)"
        />
        <MapMarker
          v-for="(stopPoint, index) in stopPoints"
          :key="index"
          :lng="stopPoint.lng"
          :lat="stopPoint.lat"
          :color="getStopColor(index)"
        >
          <MapPopup>
            <p class="map-popup__stop-number-container">
              <span class="map-popup__stop-number">{{ index + 1 }}</span>
            </p>
            <h2 class="map-popup__stop-title">
              {{ tour.stops[index].stop_content.title[locale] }}
            </h2>
            <p class="map-popup__link-container">
              <a
                :href="`/tours/${tour.id}/stops/${index}`"
                class="map-popup__link"
              >
                Go <span class="material-icons">arrow_forward</span>
              </a>
            </p>
          </MapPopup>
        </MapMarker>
      </Map>
    </div>
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

const styleChoices = ["dark", "satellite", "streets"];
const mapStyle = ref("dark");
const handleMapChange = (styleChoice) => {
  mapStyle.value = styleChoice;
};
const isActive = (styleChoice) => mapStyle.value === styleChoice;
const capitalize = (str) => str.charAt(0).toUpperCase() + str.substring(1);
</script>

<style>
.map-sheet .sheet__header {
  border-bottom: 0;
  margin-bottom: 0;
}
</style>

<style scoped>
.map-sheet__contents {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.button-bar {
  display: flex;
  justify-content: flex-end;
}
.button-bar__button {
  border: 0;
  outline: 0;
  border-radius: 0;
  padding: 0.5rem 1rem;
  font-weight: normal;
  font-size: 0.75rem;
  color: var(--gray-dark);
}

.button-bar__button:hover {
  outline: 0;
}

.button-bar__button:hover {
  background: none;
  color: var(--white);
}
.button-bar__button--is-active {
  color: var(--gray-light);
}

.map-popup__link-container {
  text-align: center;
  margin-top: 0.5rem;
}
.map-popup__link {
  display: inline-flex;
  /* border: 1px solid var(--black); */
  font-size: 0.75rem;
  color: var(--black);
  padding: 0.25rem 0.5rem;
  text-decoration: none;
  align-items: center;
  border-radius: 0.25rem;
  text-transform: uppercase;
  line-height: 1;
}

.map-popup__link:hover {
  background: var(--black);
  color: var(--white);
}
.map-popup__link .material-icons {
  font-size: 0.75rem;
}

.map-popup__stop-number {
  display: inline-flex;
  border: 2px solid var(--black);
  color: var(--black);
  font-size: 1rem;
  line-height: 1;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  width: 2rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
}
.map-popup__stop-number-container {
  text-align: left;
}
</style>
