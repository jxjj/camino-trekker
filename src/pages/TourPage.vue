<script setup>
defineProps({
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
  <h1>Tour Page</h1>
</template>
