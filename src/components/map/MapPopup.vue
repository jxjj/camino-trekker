<template>
  <div ref="popupRef" class="map-popup">
    <slot></slot>
  </div>
</template>
<script setup>
import { inject, watch, ref } from "vue";
import { Popup } from "mapbox-gl";

const markerRef = inject("markerRef");
const popupRef = ref(null);

// use ref to get the content of the slot
// and then put it in the popup using setDOMContent
watch([markerRef, popupRef], () => {
  if (!markerRef.value || !popupRef.value) return;
  const popup = new Popup().setDOMContent(popupRef.value);
  markerRef.value.setPopup(popup);
});
</script>

<style>
/* the actual popup container */
.map-popup {
  font-size: 0.8rem;
}
.map-popup h1,
.map-popup h2,
.map-popup h3 {
  font-size: 0.8rem;
  text-transform: uppercase;
  margin: 0;
}
.map-popup p {
  margin: 0;
}
.mapboxgl-popup-content {
  padding: 1.25rem 1rem 1rem;
}
</style>
