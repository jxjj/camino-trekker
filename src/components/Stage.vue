<template>
  <component :is="componentName" v-if="componentName" :stage="stage" />
  <div v-else class="stage-unknown">
    <h3>{{ stage.type }}</h3>
    <pre>{{ stage }}</pre>
  </div>
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

<style scoped>
.stage-unknown {
  border-left: 0.25rem solid var(--system-red);
}
</style>
