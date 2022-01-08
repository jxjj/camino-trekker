<template><slot></slot></template>
<script setup>
import { arrayOf, number, shape, string } from "vue-types";
import { inject, watch } from "vue";
import { toGeoJsonLineString } from "./toGeoJson.js";

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
      map.addSource(props.id, {
        type: "geojson",
        data: toGeoJsonLineString(props.positions),
      });

      map.addLayer({
        id: props.id,
        source: props.id,
        type: "line",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": props.color || "#0472f8",
          "line-width": 6,
        },
      });
    });
  }
);
</script>
