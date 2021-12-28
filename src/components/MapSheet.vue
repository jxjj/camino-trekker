<template>
  <Sheet class="map-sheet" title="Map" :is-open="isOpen">
    <p>Map Sheet Contents</p>
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
