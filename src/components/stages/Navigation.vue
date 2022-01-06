<template>
  <div class="navigation-stage">
    <Markdown :content="markdown" />
    <Button :icon="map"> Show Map </Button>
  </div>
</template>
<script setup>
import { inject, computed } from "vue";
import { shape } from "vue-types";
import Markdown from "../Markdown.vue";

const props = defineProps({
  stage: shape({
    // I18n object like: { en: 'hello', es: 'hola'}
    text: Object,
  }).loose,
});

const userLocale = inject("currentLocale", "en");
const markdown = computed(() => props.stage.text[userLocale]);
</script>
