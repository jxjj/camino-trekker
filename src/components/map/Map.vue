<template>
  <div ref="mapContainerRef" class="map-container">
    <slot />
  </div>
</template>

<script setup>
import {
  ref,
  watch,
  onMounted,
  onUnmounted,
  toRefs,
  provide,
  nextTick,
} from "vue";
import "mapbox-gl/dist/mapbox-gl.css";
import {
  Map,
  FullscreenControl,
  GeolocateControl,
  ScaleControl,
} from "mapbox-gl";
import { arrayOf, number, string, shape } from "vue-types";

const props = defineProps({
  center: shape({
    lng: number().isRequired,
    lat: number().isRequired,
  }).isRequired,
  zoom: number().isRequired,
  bounds: arrayOf(arrayOf(number())),
  mapStyle: string().def("streets"),
  accessToken: string().isRequired,
});

const mapContainerRef = ref(null);
const mapRef = ref(null);
const {
  center: centerRef,
  zoom: zoomRef,
  bounds: boundsRef,
  mapStyle: mapStyleRef,
} = toRefs(props);

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

function setupMap() {
  mapRef.value = new Map({
    container: mapContainerRef.value,
    style: MAP_STYLES[props.mapStyle],
    center: [centerRef.value.lng, centerRef.value.lat],
    zoom: zoomRef.value,
    accessToken: props.accessToken,
  });

  mapRef.value
    .addControl(new FullscreenControl())
    .addControl(new GeolocateControl())
    .addControl(new ScaleControl({ unit: "imperial" }));

  if (props.bounds) {
    mapRef.value.fitBounds(boundsRef.value, { padding: 64 });
  }
}

// watch style changes
watch(mapStyleRef, () => mapRef.value.setStyle(MAP_STYLES[mapStyleRef.value]));

// watch map bounds changes
watch(boundsRef, () => {
  console.log("update bounds to", boundsRef.value);
  if (!mapRef.value) return;
  mapRef.value.fitBounds(boundsRef.value, { padding: 64 });
});

onMounted(() => {
  setupMap();
});

onUnmounted(() => {
  // probably need to do some cleanup here?
});

provide("map", mapRef);
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 100%;
}
</style>
