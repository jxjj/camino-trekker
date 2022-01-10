<template>
  <Sheet
    class="map-sheet"
    title="Map"
    :is-open="isOpen"
    @close="$emit('close')"
  >
    <TourMap initialMapStyle="dark" :tour="tour" :stopIndex="stopIndex" />
  </Sheet>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import Sheet from "./Sheet.vue";
import TourMap from "./map/TourMap.vue";

defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["close"]);

const store = useStore();
const tour = computed(() => store.state.tour);
const stopIndex = computed(() => store.getters.stopIndex);
</script>

<style>
.map-sheet .sheet__header {
  border-bottom: 0;
  margin-bottom: 0;
}
</style>
