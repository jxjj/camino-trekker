<template>
  <div class="locale-provider">
    <slot></slot>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { arrayOf, string } from "vue-types";

const props = defineProps({
  locales: arrayOf(string()),
});

const currentLocale = ref("en");
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
