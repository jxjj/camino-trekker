<template>
  <component :is="componentName" :stage="stage" />
</template>
<script setup>
import { computed } from "vue";
import LanguageSelect from "./stages/LanguageSelect.vue";
import Guide from "./stages/Guide.vue";
import Separator from "./stages/Separator.vue";
import Navigation from "./stages/Navigation.vue";

const componentLookup = {
  language: LanguageSelect,
  guide: Guide,
  separator: Separator,
  navigation: Navigation,
};

const props = defineProps({
  stage: {
    type: Object,
    required: true,
  },
});

const componentName = computed(() => componentLookup[props.stage.type]);
</script>
