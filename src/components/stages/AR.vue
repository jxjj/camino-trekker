<template>
  <div class="ar-stage">
    <Button>Show AR</Button>
    <div class="ar-stage__scene-container">
      <div v-if="debugMode" class="ar-stage__debug">
        <dl>
          <dt>simulateLongitude</dt>
          <dd>{{ simulateLocation?.lng }}</dd>
          <dt>simulateLatitude</dt>
          <dd>{{ simulateLocation?.lat }}</dd>
        </dl>
        <pre>{{ JSON.stringify(cameraSettings, null, 2) }}</pre>
      </div>
      <a-scene
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: true"
        arjs="sourceType: webcam; sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960; debugUIEnabled: false"
      >
        <a-entity
          v-for="(waypoint, i) in waypoints"
          :key="i"
          :gps-entity-place="`latitude: ${waypoint.location.lat}; longitude: ${waypoint.location.lng}`"
          :position="`0 ${waypoint.altitude || 0} 0`"
          rotation="0 0 0"
          look-at="[gps-camera]"
          :scale="`${getScaledDistanceFromWaypoint(
            waypoint
          )} ${getScaledDistanceFromWaypoint(
            waypoint
          )} ${getScaledDistanceFromWaypoint(waypoint)}`"
        >
          <a-text
            :value="waypoint.text"
            color="black"
            align="center"
            material="color: #eee; opacity: 0.6; transparent: true"
          ></a-text>
          <!-- <a-plane
            color="white"
            position="0 1.6 -0.01"
            width="3"
            material="transparent: true; opacity: 0.90"
          ></a-plane> -->

          <a-cone
            radius-bottom="1"
            height="2"
            material="color: magenta;"
            rotation="0 0 180"
            position="0 -0.25 0"
          >
          </a-cone>
        </a-entity>
        <!-- <a-text
          v-for="(waypoint, index) in waypoints"
          :key="index"
          :value="waypoint.text"
          :gps-entity-place="`latitude: ${waypoint.location.lat}; longitude: ${waypoint.location.lng}`"
          :position="`0 ${waypoint.altitude || 0} 0`"
          rotation="0 0 0"
          font="roboto"
          color="#e43e31"
          look-at="[gps-camera]"
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
        </a-text> -->

        <a-camera
          :gps-camera="cameraSettings"
          rotation-reader
          maxDistance="10000"
          far="90000"
        ></a-camera>

        <!-- <a-camera
          :gps-camera="cameraSettings"
          rotation-reader
          max-distance="10000"
          far="90000"
        >
        </a-camera> -->
      </a-scene>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { bool, number, object, shape, string } from "vue-types";
import "./ARTest/useAR.js";
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
  debugMode: bool().def(false),
});

const waypoints = computed(() =>
  props.stage.waypoints.map((waypoint) => ({
    ...waypoint,
    text: waypoint.text[props.locale],
  }))
);

const cameraSettings = computed(() => {
  if (!props.simulateLocation) return "";
  return [
    `simulateLongitude: ${props.simulateLocation.lng}`,
    `simulateLatitude: ${props.simulateLocation.lat}`,
    `simulateAltitude: 0,`,
  ].join("; ");
});

const getTextWidth = (waypoint) => getSizeForPoint(waypoint) / 1.5;
const getTextHeight = (waypoint) => {
  const distance = getDistanceFromWaypoint(waypoint);
  return Math.pow(Math.log(distance), 2) * 1.5;
};
const getDistanceFromWaypoint = (waypoint) => {
  const stageLocation = props.currentStopTargetPoint;
  const a = waypoint.location.lat - stageLocation.lat;
  const b = waypoint.location.lng - stageLocation.lng;
  const distance = Math.sqrt(a * a + b * b) * 111139; //meters per degree
  return distance;
};

const getScaledDistanceFromWaypoint = (waypoint) =>
  Math.pow(Math.log(getDistanceFromWaypoint(waypoint)), 2);

const getSizeForPoint = (waypoint) => {
  const scaledDistance = getScaledDistanceFromWaypoint(waypoint);
  return scaledDistance * waypoint.text.length;
};
</script>
<style scope>
.ar-stage__debug {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  padding: 1rem;
  background: hsla(0, 0%, 100%, 0.5);
}
</style>
