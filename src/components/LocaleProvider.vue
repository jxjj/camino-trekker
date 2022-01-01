<template>
  <div class="locale-provider">
    <slot></slot>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
const locale = ref("English");

const setLocale = (newLocale) => (locale.value = newLocale);

provide("locale", locale.value);
provide("setLocale", setLocale);
</script>
