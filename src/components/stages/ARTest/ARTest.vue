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
        <a-entity
          gps-projected-entity-place="latitude: 44.810892; longitude: -93.627038"
        >
          <a-text
            value="Hello, world!"
            color="red"
            align="center"
            scale="2 2 2"
            position="0 1.6 0"
            look-at="[gps-projected-camera]"
          ></a-text>
          <a-plane
            color="white"
            position="0 1.6 -0.01"
            width="3"
            material="transparent: true; opacity: 0.90"
            look-at="[gps-projected-camera]"
          ></a-plane>

          <a-cone
            radius-bottom="1"
            height="2"
            material="color: magenta;"
            rotation="0 0 180"
            position="0 -0.25 0"
          >
          </a-cone>
        </a-entity>
      </a-scene>
    </div>
  </div>
</template>

<script setup>
import Button from "../../Button.vue";
import { useGeolocation } from "@vueuse/core";
import "@ar-js-org/ar.js";
import "aframe-look-at-component";
import "aframe";

const { coords } = useGeolocation();
console.log({ coords });
</script>
