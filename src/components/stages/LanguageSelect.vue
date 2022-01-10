<template>
  <PureLanguageSelect
    :locale="locale"
    :locales="locales"
    @onSubmit="onSubmit(selectedLocale)"
  />
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import PureLanguageSelect from "./PureLanguageSelect.vue";

const store = useStore();
const locale = computed(() => store.state.locale);
const locales = computed(() => store.state.tour.tour_content.languages);
const onSubmit = (selected) => store.dispatch("setLocale", selected);
</script>
<style scoped>
.input-group {
  display: block;
  padding: 0.5rem 0;
}

.save-button {
  margin: 1rem 0;
}
</style>
