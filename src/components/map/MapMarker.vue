<template><slot></slot></template>
<script setup>
import { number, string } from "vue-types";
import { inject, watch } from "vue";
// import { toGeoJsonPoint } from "./toGeoJson.js";
import { Marker } from "mapbox-gl";

const props = defineProps({
  lng: number().isRequired,
  lat: number().isRequired,
  // unique ID for this data source
  // id: string().isRequired,
});

const mapRef = inject("mapRef", null);

// watch mapRef. When there's a valid Map
// listen for the load event and then
// add the polyline
watch(
  () => mapRef.value,
  () => {
    const map = mapRef.value;
    if (!map) return;
    map.on("load", () => {
      new Marker().setLngLat([props.lng, props.lat]).addTo(map);
    });
  }
);
</script>
