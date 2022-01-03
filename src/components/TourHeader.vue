<template>
  <header v-if="tour" class="tour-header container">
    <h2 class="tour-header__title">
      <span class="half-highlight">{{ tour.title }}</span>
    </h2>
    <p class="tour-header__subtitle h2">{{ location }}</p>
    <TourAuthor :author="tour.author" />
  </header>
</template>
<script setup>
import TourAuthor from "./TourAuthor.vue";
import { computed } from "vue";
// import maskImage from "../assets/blob-mask.svg";
import { object, shape, string } from "vue-types";

const props = defineProps({
  tour: shape({
    title: string(),
    author: object().isRequired,
    thumbnail: object().isRequired,
    geocoded: object().isRequired,
  }).loose,
});

const location = computed(() => {
  const { city, state } = props.tour.geocoded;
  return `${city}, ${state}`;
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
</style>
