<script setup>
const props = defineProps({
  tourId: {
    type: Number,
    required: true,
  },
  stopId: {
    type: Number,
    default: 0,
  },
});
</script>
<template>
  <h1>Tour {{ tourId }}</h1>
</template>
