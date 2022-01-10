<template><slot></slot></template>
<script setup>
import { number, string } from "vue-types";
import { inject, provide, watch, ref } from "vue";
import { Marker } from "mapbox-gl";

const props = defineProps({
  lng: number().isRequired,
  lat: number().isRequired,
  color: string(),
});

const mapRef = inject("mapRef");

const markerRef = ref(null);
provide("markerRef", markerRef);

watch(
  () => mapRef.value,
  () => {
    const map = mapRef.value;
    if (!map) return;
    map.on("load", () => {
      markerRef.value = new Marker({
        color: props.color,
      })
        .setLngLat([props.lng, props.lat])
        .addTo(map);
    });
  }
);
</script>
