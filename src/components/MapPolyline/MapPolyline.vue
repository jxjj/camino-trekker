<template><slot></slot></template>
<script setup>
import { arrayOf, number, shape, string } from "vue-types";
import { inject } from "vue";
import useMapPolyline from "./useMapPolyline.js";

const props = defineProps({
  positions: arrayOf(
    shape({
      lng: number().isRequired,
      lat: number().isRequired,
    })
  ),
  // unique ID for this data source
  id: string().isRequired,
  color: string(),
});

const mapRef = inject("map", null);
const { addPolyline } = useMapPolyline(mapRef);
addPolyline(props);
</script>
