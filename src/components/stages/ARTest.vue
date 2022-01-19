<template>
  <div class="ar-stage">
    <Button>Show AR</Button>
    <div class="ar-stage__scene-container">
      <dl>
        <dt>Longitude</dt>
        <dd>{{ coords.longitude }}</dd>
        <dt>Latitude</dt>
        <dd>{{ coords.latitude }}</dd>
      </dl>
      <a-scene
        v-if="isLocationLoaded"
        vr-mode-ui="enabled: false"
        renderer="antialias: true; alpha: true"
        arjs="sourceType: webcam; sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960; debugUIEnabled: true"
      >
        <a-camera gps-camera rotation-reader></a-camera>
        <a-entity
          v-for="(waypoint, i) in waypoints"
          :key="i"
          :gps-entity-place="`latitude: ${waypoint.location.lat}; longitude: ${waypoint.location.lng}`"
          look-at="[gps-camera]"
        >
          <a-text
            :value="waypoint.text"
            color="black"
            align="center"
            scale="2 2 2"
            position="0 1.6 0"
          ></a-text>
          <a-plane
            color="white"
            position="0 1.6 -0.01"
            width="3"
            material="transparent: true; opacity: 0.90"
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
import { computed, watch, ref } from "vue";
import Button from "../Button.vue";
import useAR from "./useAR.js";

const { coords } = useAR();
const isLocationLoaded = computed(() => !!coords.value.latitude);

const waypoints = ref([]);

watch(
  () => coords.value,
  () => {
    const { longitude, latitude } = coords.value;
    waypoints.value = [
      {
        text: "North",
        location: {
          lng: longitude,
          lat: latitude + 0.0001,
        },
      },
      {
        text: "East",
        location: {
          lng: longitude + 0.0001,
          lat: latitude,
        },
      },
      {
        text: "South",
        location: {
          lng: longitude,
          lat: latitude - 0.0001,
        },
      },
      {
        text: "West",
        location: {
          lng: longitude - 0.0001,
          lat: latitude,
        },
      },
    ];
  }
);
</script>
