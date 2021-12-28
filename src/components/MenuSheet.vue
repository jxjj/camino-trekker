<template>
  <Sheet class="menu-sheet" title="Menu" :is-open="isOpen">
    <p>Menu Sheet Contents</p>
  </Sheet>
</template>
<script setup>
import Sheet from "./Sheet.vue";
defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});
</script>
