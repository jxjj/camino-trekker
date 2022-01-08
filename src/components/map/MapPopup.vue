<template>
  <div ref="popupRef" class="map-popup-container">
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
  const popup = new Popup({ className: "map-popup" }).setDOMContent(
    popupRef.value
  );
  markerRef.value.setPopup(popup);
});
</script>

<style scoped>
.popup-container {
  display: none;
}
</style>
