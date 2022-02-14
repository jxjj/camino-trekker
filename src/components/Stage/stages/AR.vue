<template>
  <div class="ar-stage">
    <Button icon="travel_explore" @click="toggleShowAr">Look Around</Button>

    <iframe
      v-if="isShowingAR"
      class="ar-iframe"
      :src="src"
      frameborder="0"
      width="100%"
      height="100%"
    >
      Loading AR...
    </iframe>
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
  simulateLocation: bool().def(false),
  locale: string().def("en"),
});

const { tour } = useTour();
const { stopIndex } = useStopIndex();

const isShowingAR = ref(false);
function toggleShowAr() {
  console.log("toggleShowAr");
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
  min-height: 70vh;
  margin: 1rem 0;
}
</style>
