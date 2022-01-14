<template>
  <div class="ar-stage">
    <Button>Show AR</Button>
    <div class="ar-stage__scene-container">
      <a-scene
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: true"
        arjs="sourceType: webcam; sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960; debugUIEnabled: false"
      >
        <a-text
          v-for="(waypoint, index) in waypoints"
          :key="index"
          :value="waypoint.text"
          :gps-entity-place="
            [
              `latitude: ${waypoint.location.lat}`,
              `longitude: ${waypoint.location.lng}`,
            ].join('; ')
          "
          :position="`0 ${waypoint.altitude || 0} 0`"
          rotation="0 0 0"
          font="roboto"
          color="#e43e31"
          look-at="#camera"
          side="double"
          align="center"
          :z-offset="getDistanceFromWaypoint(waypoint) * 0.1"
          :geometry="
            [
              'primitive: plane',
              `width: ${getTextWidth(waypoint)}`,
              `height: ${getTextHeight(waypoint)}`,
            ].join('; ')
          "
          material="color: #eee; opacity: 0.6; transparent: true"
          :width="getSizeForPoint(waypoint)"
        >
        </a-text>

        <a-camera
          id="camera"
          :gps-camera="cameraSettings"
          rotation-reader
          max-distance="10000"
          far="90000"
        >
        </a-camera>
      </a-scene>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { number, object, shape, string } from "vue-types";
import Button from "../Button.vue";

const props = defineProps({
  stage: object().isRequired,
  simulateLocation: shape({
    lng: number(),
    lat: number(),
  }),
  currentStopTargetPoint: shape({
    lng: number(),
    lat: number(),
  }),
  locale: string().def("en"),
});

const waypoints = computed(() =>
  props.stage.waypoints.map((waypoint) => ({
    ...waypoint,
    text: waypoint.text[props.locale],
  }))
);

function cameraSettings() {
  if (!props.simulateLocation) return "";

  return [
    `simulateLongitude: ${props.simulateLocations.lng}`,
    `simulateLatitude: ${props.simulateLocation.lat}`,
    `simulateAltitude: 0,`,
  ].join("; ");
}

function getDistanceFromWaypoint(waypoint) {
  if (!props.currentStopTargetPoint) return 2000;

  const x = waypoint.location.lng - props.currentStopTargetPoint.lng;
  const y = waypoint.location.lat - props.currentStopTargetPoint.lat;
  const distance = Math.sqrt(x ** 2 + y ** 2) * 111139; //meters per degree
  return distance;
}

function getScaledDistanceFromWaypoint(waypoint) {
  return Math.log(getDistanceFromWaypoint(waypoint)) ** 2;
}

function getTextHeight(waypoint) {
  var distance = getDistanceFromWaypoint(waypoint);
  return 1.5 * Math.log(distance) ** 2;
}

function getSizeForPoint(waypoint) {
  var scaledDistance = getScaledDistanceFromWaypoint(waypoint);
  return scaledDistance * waypoint.text.length;
}

function getTextWidth(waypoint) {
  return getSizeForPoint(waypoint) / 1.5;
}
</script>
