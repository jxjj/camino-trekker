<template>
  <div class="ar-test">
    <a-scene
      vr-mode-ui="enabled: false"
      embedded
      arjs="sourceType: webcam; debugUIEnabled: false;"
    >
      <a-text
        value="This content will always face you."
        look-at="[gps-camera]"
        scale="120 120 120"
        :gps-entity-place="
          [`latitude: ${coords.lat}`, `longitude: ${coords.lng}`].join('; ')
        "
      ></a-text>
      <a-camera gps-camera rotation-reader> </a-camera>
    </a-scene>
  </div>
</template>
<script setup>
import "aframe";
import "@ar-js-org/ar.js/aframe/build/aframe-ar";
const coords = {
  lat: 44.811498,
  lng: -93.627266,
};
</script>
