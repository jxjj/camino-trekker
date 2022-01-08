<template><slot></slot></template>
<script setup>
import { number, string } from "vue-types";
import { inject, watch } from "vue";
// import { toGeoJsonPoint } from "./toGeoJson.js";
import { Marker } from "mapbox-gl";

const props = defineProps({
  lng: number().isRequired,
  lat: number().isRequired,
  color: string(),
});

const mapRef = inject("mapRef", null);

watch(
  () => mapRef.value,
  () => {
    const map = mapRef.value;
    if (!map) return;
    map.on("load", () => {
      new Marker({
        color: props.color,
      })
        .setLngLat([props.lng, props.lat])
        .addTo(map);
    });
  }
);
</script>
