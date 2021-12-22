<script setup>
const props = defineProps({
  tourId: {
    type: Number,
    required: true,
  },
});
</script>
<template>
  <h1>Tour {{ tourId }}</h1>
</template>
