<template>
  <img
    class="image-blob"
    :src="src"
    :alt="alt"
    :style="{
      maskImage: `url(${maskImage})`,
      filter: `grayscale(1) sepia(1) hue-rotate(${hueRotate}deg) brightness(1.5)`,
    }"
  />
</template>
<script setup>
import maskImage from "../assets/blob-mask.svg";

defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  hueRotate: {
    type: Number,
    default: 140,
  },
});
</script>
<style scoped>
.image-blob {
  mask-size: contain;
  mask-repeat: no-repeat;
}
</style>
