<template>
  <div ref="mapContainer" class="map-container">
    <slot />
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { arrayOf, number, string } from "vue-types";
import useMap from "./useMap.js";

const props = defineProps({
  lng: number().isRequired,
  lat: number().isRequired,
  zoom: number().isRequired,
  bounds: arrayOf(arrayOf(number())),
  mapStyle: string().def("streets"),
  accessToken: string().isRequired,
});
console.log(props.accessToken);

const mapContainer = ref(null);
const { map } = useMap(mapContainer, props);
provide("map", map);
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 100%;
}
</style>
