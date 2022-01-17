<template>
  <div class="ar-stage">
    <Button>Show AR</Button>
    <div class="ar-stage__scene-container">
      <a-scene
        vr-mode-ui="enabled: false"
        arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false;"
        renderer="antialias: true; alpha: true"
      >
        <a-camera gps-projected-camera rotation-reader></a-camera>
        <a-box
          gps-projected-entity-place="latitude: 44.810982; longitude: -93.627016"
          material="color: red"
          scale="10 10 10"
        ></a-box>
      </a-scene>
    </div>
  </div>
</template>

<script setup>
import Button from "../../Button.vue";
import { useGeolocation } from "@vueuse/core";
import "@ar-js-org/ar.js";
import "aframe";

const { coords } = useGeolocation();
console.log({ coords });
</script>
