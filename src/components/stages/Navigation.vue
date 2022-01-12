<template>
  <div class="navigation-stage">
    <div class="navigation-stage__tour-map-wrapper">
      <TourMap initialMapStyle="light" type="stop" :stopIndex="stopIndex" />
    </div>
    <Markdown :content="markdown" />
  </div>
</template>
<script setup>
import { computed } from "vue";
import { shape, string } from "vue-types";
import { useStopIndex } from "../../common/hooks";
import Markdown from "../Markdown.vue";
import TourMap from "../TourMap/TourMap.vue";

const props = defineProps({
  stage: shape({
    // I18n object like: { en: 'hello', es: 'hola'}
    text: Object,
  }).loose,
  locale: string().isRequired,
});

const markdown = computed(() => props.stage.text[props.locale]);
const { stopIndex } = useStopIndex();
</script>
<style>
.navigation-stage__tour-map-wrapper {
  height: 50vh;
}
</style>
