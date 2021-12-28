<template>
  <img
    class="image-blob"
    :src="src"
    :alt="alt"
    :style="{
      maskImage: `url(${maskImage})`,
      filter: `grayscale(1) sepia(1) hue-rotate(125deg) brightness(1.5)`,
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
});
</script>
<style scoped>
.image-blob {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  mask-size: contain;
  mask-repeat: no-repeat;
}
</style>
