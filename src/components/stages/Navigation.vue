<template>
  <div class="navigation-stage">
    <TourMap v-if="tour" :tour="tour" :activeStopIndex="stopIndex" />
    <Markdown :content="markdown" />
  </div>
</template>
<script setup>
import { inject, computed } from "vue";
import { shape } from "vue-types";
import Markdown from "../Markdown.vue";
import TourMap from "../map/TourMap.vue";

const props = defineProps({
  stage: shape({
    // I18n object like: { en: 'hello', es: 'hola'}
    text: Object,
  }).loose,
});

const userLocale = inject("currentLocale", "en");
const tour = inject("tour");
const stopIndex = inject("stopIndex");

const markdown = computed(() => props.stage.text[userLocale]);
</script>
