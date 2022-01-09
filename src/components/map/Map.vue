<template>
  <div ref="mapContainer" class="map-container">
    <slot />
  </div>
</template>

<script setup>
import { onMounted, provide, ref, watch } from "vue";
import { arrayOf, number, string } from "vue-types";
import "mapbox-gl/dist/mapbox-gl.css";
import {
  Map,
  FullscreenControl,
  GeolocateControl,
  ScaleControl,
} from "mapbox-gl";
import config from "../../config.js";

const MAP_STYLES = {
  streets: "mapbox://styles/mapbox/streets-v11",
  outdoors: "mapbox://styles/mapbox/outdoors-v11",
  light: "mapbox://styles/mapbox/light-v10",
  dark: "mapbox://styles/mapbox/dark-v10",
  satellite: "mapbox://styles/mapbox/satellite-v9",
  "satellite-streets": "mapbox://styles/mapbox/satellite-streets-v11",
  "navigation-day": "mapbox://styles/mapbox/navigation-day-v1",
  "navigation-night": "mapbox://styles/mapbox/navigation-night-v1",
};

const props = defineProps({
  lng: number().isRequired,
  lat: number().isRequired,
  zoom: number().isRequired,
  bounds: arrayOf(arrayOf(number())),
  mapStyle: string().def("streets"),
});

// reference to ref="mapContainer" element
const mapContainer = ref(null);
const mapRef = ref(null);
provide("mapRef", mapRef);

function setupMap() {
  mapRef.value = new Map({
    container: mapContainer.value,
    style: MAP_STYLES[props.mapStyle],
    center: [props.lng, props.lat],
    zoom: props.zoom,
    accessToken: config.mapBox.accessToken,
  });

  mapRef.value
    .addControl(new FullscreenControl())
    .addControl(new GeolocateControl())
    .addControl(new ScaleControl({ unit: "imperial" }));

  if (props.bounds) {
    mapRef.value.fitBounds(props.bounds, {
      padding: 32,
    });
  }
}

watch(
  () => props.mapStyle,
  () => {
    console.log(`style changed to ${props.mapStyle}`);
    mapRef.value.setStyle(MAP_STYLES[props.mapStyle]);
  }
);

onMounted(() => {
  setupMap();
});
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 100%;
}
</style>
