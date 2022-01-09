<template><slot></slot></template>
<script setup>
import { provide, ref } from "vue";

const props = defineProps({
  tour: {
    type: Object,
    default: null,
  },
  stopIndex: {
    type: Number,
    default: 0,
  },
});

provide("tour", props.tour);
provide("stopIndex", props.stopIndex);
</script>
