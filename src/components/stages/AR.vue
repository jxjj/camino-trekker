<template>
  <div class="ar-stage">
    <Button>Show AR</Button>
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
</template>

<script setup>
import { computed } from "vue";
import { number, object, shape } from "vue-types";
import { useTour, useStopIndex, useLocale } from "../../common/hooks.js";

const props = defineProps({
  stage: object().isRequired,
  currentLocation: shape({
    lng: number(),
    lat: number(),
  }),
});

const { tour } = useTour();
const { stopIndex } = useStopIndex();
const { locale } = useLocale();
const currentStop = computed(() => tour.value.stops[stopIndex.value]);
const waypoints = computed(() =>
  props.stage.map((waypoint) => ({
    ...waypoint,
    text: waypoint.text[locale.value],
  }))
);
const currentStopNavStage = computed(() =>
  currentStop.value.stop_content.stages.find(
    (elem) => elem.type == "navigation"
  )
);

function cameraSettings() {
  if (!props.simulateLocation) return "";

  const startLocation =
    currentStopNavStage.value?.targetPoint || tour.value.start_location;

  return [
    `simulateLatitude: ${startLocation.lat}`,
    `simulateLongitude: ${startLocation.lng}`,
    `simulateAltitude: 0,`,
  ].join("; ");
}

function getDistanceFromWaypoint(waypoint) {
  const nav = currentStopNavStage.value;
  if (!nav) return 2000;

  const stageLocation = nav.targetPoint;

  const a = waypoint.location.lat - stageLocation.lat;
  const b = waypoint.location.lng - stageLocation.lng;
  const distance = Math.sqrt(a * a + b * b) * 111139; //meters per degree
  return distance;
}

function getScaledDistanceFromWaypoint(waypoint) {
  return Math.pow(Math.log(getDistanceFromWaypoint(waypoint)), 2);
}

function getTextHeight(waypoint) {
  var distance = getDistanceFromWaypoint(waypoint);
  return Math.pow(Math.log(distance), 2) * 1.5;
}

function getSizeForPoint(waypoint) {
  var scaledDistance = getScaledDistanceFromWaypoint(waypoint);
  return scaledDistance * waypoint.text.length;
}

function getTextWidth(waypoint) {
  return getSizeForPoint(waypoint) / 1.5;
}
</script>
