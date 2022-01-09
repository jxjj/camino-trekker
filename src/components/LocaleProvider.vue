<template><slot></slot></template>
<script setup>
import { provide, ref } from "vue";
import { arrayOf, string } from "vue-types";

const props = defineProps({
  locales: arrayOf(string()),
  initialLocale: {
    type: String,
    default: "en",
  },
});

const currentLocale = ref(initialLocale);
const setCurrentLocale = (newLocale) => {
  if (!props.locales.includes(newLocale)) {
    throw Error(
      `Cannot set new locale. '${newLocale}' is not in locales list: '${props.locales}'`
    );
  }
  currentLocale.value = newLocale;
};

provide("locales", props.locales);
provide("locale", currentLocale.value);
provide("setCurrentLocale", setCurrentLocale);
</script>
