<template>
  <header v-if="tour" class="tour-header">
    <div class="container">
      <h2 class="tour-header__title">
        <span class="half-highlight">{{ tour.title }}</span>
      </h2>
      <p class="tour-header__subtitle h2">{{ location }}</p>
      <TourAuthor :author="tour.author" />
    </div>
    <div class="tour-header__thumbnail"></div>
  </header>
</template>
<script setup>
import TourAuthor from "./TourAuthor.vue";
// import maskImage from "../assets/blob-mask.svg";
import { object, shape, string } from "vue-types";

defineProps({
  tour: shape({
    title: string(),
    author: object().isRequired,
    thumbnail: object().isRequired,
    geocoded: object().isRequired,
  }).loose,
});
</script>
<style scoped>
.tour-header {
  position: relative;
  padding: 3rem 0 5rem;
}

.tour-header__title {
  --outline: 2px;
  --neg-outline: calc(-1 * var(--outline));
  -webkit-text-stroke: var(--outline) var(--black);
  /* text-shadow: var(--neg-outline) var(--neg-outline) 0 var(--black),
    var(--outline) var(--neg-outline) 0 var(--black),
    var(--neg-outline) var(--outline) 0 var(--black),
    var(--outline) var(--outline) 0 var(--black); */
  text-shadow: 4px 4px 0px #f3ff7d;
  font-size: 2.5rem;
  font-weight: 900;
  color: white;
  margin: 0;
}

.tour-header__subtitle {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--black);
  margin: 1rem 0;
}
.half-highlight {
  background: linear-gradient(
    to top,
    transparent 20%,
    var(--yellow) 20%,
    var(--yellow) 66%,
    transparent 66%
  );
}

.image-blob {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -10;
  mask-size: contain;
  mask-repeat: no-repeat;
  filter: grayscale(1) sepia(1) hue-rotate(130deg) brightness(1.5);
}

.tour-header__thumbnail {
  border: 1px solid red;
  position: absolute;
  top: 0;
  left: 33%;
  width: 66%;
  height: 100%;
}
</style>
