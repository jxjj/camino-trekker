<template>
  <div class="ar-stage">
    <Button icon="travel_explore" @click="toggleShowAr">Look Around</Button>

    <Teleport to="#modals">
      <Sheet
        title="Look Around"
        :isOpen="isShowingAR"
        @close="isShowingAR = false"
      >
        <iframe
          v-if="isShowingAR"
          class="ar-iframe"
          :src="src"
          frameborder="0"
          width="100%"
          height="100%"
          :allow="`camera ${config.apiBaseUrl}; geolocation; gyroscope; accelerometer; magnetometer; fullscreen`"
        >
          Loading AR...
        </iframe>
      </Sheet>
    </Teleport>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { bool, object, string } from "vue-types";
import Button from "../../Button/Button.vue";
import { useStopIndex, useTour } from "../../../common/hooks.js";
import config from "../../../config.js";
import Sheet from "../../Sheet/Sheet.vue";

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
<style scope>
.ar-iframe {
  border: 1px solid #ddd;
  height: 70vh;
  margin: auto;
}
</style>
