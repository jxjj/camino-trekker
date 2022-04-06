<template>
  <div class="ar-stage">
    <Button icon="travel_explore" @click="toggleShowAr">Look Around</Button>

    <Teleport to="#modals">
      <div v-if="isShowingAR" class="ar-stage__modal">
        <iframe
          class="ar-iframe"
          :src="src"
          frameborder="0"
          width="100%"
          height="100%"
          :allow="`camera; geolocation; gyroscope; accelerometer; magnetometer; fullscreen`"
        >
          Loading AR...
        </iframe>
        <Button
          class="close-modal-button"
          icon="close"
          variant="icon-only"
          @click="isShowingAR = false"
          >Close</Button
        >
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { bool, object, string } from "vue-types";
import Button from "../../Button/Button.vue";
import { useStopIndex, useTour } from "../../../common/hooks.js";
import config from "../../../config.js";

const props = defineProps({
  stage: object().isRequired,
  simulateLocation: bool().def(true),
  locale: string().def("en"),
});

const { tour } = useTour();
const { stopIndex } = useStopIndex();

const isShowingAR = ref(false);
function toggleShowAr() {
  isShowingAR.value = !isShowingAR.value;
}

const src = computed(() => {
  // TODO: change this to use 2 letter locales
  return `${config.apiBaseUrl}/ar/${tour.value.id}/${stopIndex.value}/English/${props.simulateLocation}`;
});
</script>
<style scoped>
.ar-iframe {
  height: 100vh;
  margin: 0;
  background: var(--gray-lighter);
}

.ar-stage__modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* above navbar */
  z-index: 200;
}
.close-modal-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
</style>
