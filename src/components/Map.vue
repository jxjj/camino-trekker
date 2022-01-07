<template>
  <div ref="mapContainer" class="map-container"></div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import config from "../config.js";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// reference to ref="mapContainer";
const mapContainer = ref(null);

const data = reactive({
  center: [37.7749, -122.4194],
});

console.log({ config });

function setupLeafletMap(rootEl) {
  const mapDiv = L.map(rootEl).setView(data.center, 13);
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      accessToken: config.mapBox.accessToken,
    }
  ).addTo(mapDiv);
}

onMounted(() => {
  setupLeafletMap(mapContainer.value);
});
</script>

<style scoped>
.map-container {
  width: 100vw;
  height: 100%;
  border: 1px solid red;
}
</style>
