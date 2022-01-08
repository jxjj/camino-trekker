<template>
  <div ref="mapContainer" class="map-container"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { number } from "vue-types";
import "mapbox-gl/dist/mapbox-gl.css";
import {
  Map,
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
  ScaleControl,
} from "mapbox-gl";
import config from "../../config.js";
import addRouteToMap from "./addRouteToMap.js";

const props = defineProps({
  lng: number().isRequired,
  lat: number().isRequired,
  zoom: number().isRequired,
  route: Object,
});

// reference to ref="mapContainer" element
const mapContainer = ref(null);
const map = ref(null);
function setupMap() {
  map.value = new Map({
    container: mapContainer.value,
    style: "mapbox://styles/mapbox/streets-v11",
    center: [props.lng, props.lat],
    zoom: props.zoom,
    accessToken: config.mapBox.accessToken,
  });

  map.value
    .addControl(new FullscreenControl())
    .addControl(new GeolocateControl())
    .addControl(new NavigationControl())
    .addControl(new ScaleControl({ unit: "imperial" }));

  map.value.on("load", () =>
    addRouteToMap({
      route: props.route,
      map: map.value,
      id: "route",
    })
  );
}

// if we're watching map center and zoom
// const centerLng = ref(props.lng);
// const centerLat = ref(props.lat);
// const zoom = ref(props.zoom);

// const onMapLoad = (fn) =>
//   watch(
//     () => map.value,
//     () => {
//       if (!map.value) return;
//       fn();
//     }
//   );

// const setupWatchMapOnMove = ({ mapRef, lngRef, latRef, zoomRef }) =>
//   watch(
//     () => mapRef.value,
//     () => {
//       // wait for map to initialize
//       if (!mapRef.value) return;
//       mapRef.value.on("move", () => {
//         lngRef.value = map.value.getCenter().lng.toFixed(4);
//         latRef.value = map.value.getCenter().lat.toFixed(4);
//         zoomRef.value = map.value.getZoom().toFixed(2);
//       });
//     }
//   );

onMounted(() => {
  setupMap();
  // setupWatchMapOnMove({
  //   mapRef: map,
  //   lngRef: centerLng,
  //   latRef: centerLat,
  //   zoomRef: zoom,
  // });
  // onMapLoad(() =>

  // );
});
</script>

<style scoped>
.map-container {
  /* width: 100%;
  height: 100%; */
  min-height: 20rem;
  border: 1px solid red;
}
</style>
