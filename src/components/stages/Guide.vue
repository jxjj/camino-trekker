<template>
  <div class="guide-stage">
    <Markdown :content="markdown" />
  </div>
</template>

<script setup>
import { inject, computed } from "vue";
import { shape, string } from "vue-types";
import Markdown from "../Markdown.vue";

const props = defineProps({
  stage: shape({
    text: string(),
  }).loose,
});

const userLocale = inject("currentLocale", "en");
const markdown = computed(() => props.stage.text[userLocale]);
</script>

<style scoped>
.stage-type {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
