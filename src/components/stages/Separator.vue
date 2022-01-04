<template>
  <h3 class="separator-stage">{{ text }}</h3>
</template>
<script setup>
import { inject, computed } from "vue";
import { object, shape } from "vue-types";

const props = defineProps({
  stage: shape({
    text: object().def({
      en: "",
    }),
  }).loose,
});

const locale = inject("currentLocale", "en");
const text = computed(() => props.stage.text[locale]);
</script>
<style scoped>
.separator-stage {
  border-top: 1px solid var(--gray-light);
  padding-top: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
