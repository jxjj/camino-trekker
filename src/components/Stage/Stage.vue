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
import Gallery from "./stages/Gallery.vue";
import AR from "./stages/AR.vue";
import EmbedFrame from "./stages/EmbedFrame.vue";
import DeepDives from "./stages/DeepDives.vue";
import DeepDivesSummary from "./stages/DeepDivesSummary.vue";

const componentLookup = {
  language: LanguageSelect,
  guide: Guide,
  separator: Separator,
  navigation: Navigation,
  gallery: Gallery,
  ar: AR,
  "embed-frame": EmbedFrame,
  deepdives: DeepDives,
  "deepdives-summary": DeepDivesSummary,
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
  background: #ffeff1;
  border-left: 0.25rem solid var(--system-red);
  padding: 1rem;
}
</style>
