<template>
  <div ref="mapContainer" class="map-container">
    <slot />
  </div>
</template>

<script setup>
import { onMounted, provide, ref } from "vue";
import { arrayOf, number } from "vue-types";
import "mapbox-gl/dist/mapbox-gl.css";
import {
  Map,
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
  ScaleControl,
} from "mapbox-gl";
import config from "../../config.js";

const props = defineProps({
  lng: number().isRequired,
  lat: number().isRequired,
  zoom: number().isRequired,
  bounds: arrayOf(arrayOf(number())),
});

// reference to ref="mapContainer" element
const mapContainer = ref(null);
const mapRef = ref(null);
provide("mapRef", mapRef);

function setupMap() {
  mapRef.value = new Map({
    container: mapContainer.value,
    style: "mapbox://styles/mapbox/streets-v11",
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

onMounted(() => {
  setupMap();
});
</script>

<style scoped>
.map-container {
  min-height: 20rem;
}
</style>
