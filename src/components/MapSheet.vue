<template>
  <Sheet
    class="map-sheet"
    title="Map"
    :is-open="isOpen"
    @close="$emit('close')"
  >
    <TourMap initialMapStyle="dark" />
  </Sheet>
</template>
<script setup>
import Sheet from "./Sheet.vue";
import TourMap from "./map/TourMap.vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  tour: {
    type: Object,
    isRequired: true,
  },
  activeStopIndex: {
    type: Number,
    default: 0,
  },
});

defineEmits(["close"]);
</script>

<style>
.map-sheet .sheet__header {
  border-bottom: 0;
  margin-bottom: 0;
}
</style>
