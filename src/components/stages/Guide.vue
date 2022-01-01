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

const userLocale = inject("locale", "English");
const markdown = computed(() => props.stage.text[userLocale]);
</script>

<style scoped></style>
