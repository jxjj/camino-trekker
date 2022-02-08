<template>
  <header v-if="tour" class="tour-header container">
    <div class="tour-header__content">
      <p class="tour-header__number">Start</p>
      <h2 class="tour-header__title">
        {{ tour.title }}
      </h2>
      <p class="tour-header_details">{{ location }}</p>
      <TourAuthor class="tour-header__author" :author="tour.author" />
    </div>

    <div class="tour-header__img-container">
      <img
        class="tour-header__img"
        :src="tourImage.src"
        :alt="tourImage.alt[locale]"
      />
    </div>
  </header>
</template>
<script setup>
import { computed } from "vue";
import TourAuthor from "../TourAuthor/TourAuthor.vue";
import { useLocale, useTour } from "../../common/hooks.js";

const { tour } = useTour();
const { locale } = useLocale();

const location = computed(() => {
  const { city, state } = tour.value.geocoded;
  return `${city}, ${state}`;
});

const tourImage = computed(() => tour.value.stops[0].stop_content.image);
</script>
<style scoped>
.tour-header {
  padding: 4rem 0;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--white);
  z-index: -10;
  margin-bottom: -2rem;
}

.tour-header__img-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: var(--white);
  border-radius: 2rem 2rem 0 0;
  z-index: -10;
}
.tour-header__img-container:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 25%,
    rgba(0, 0, 0, 0.9) 100%
  );
}

.tour-header__img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tour-header__content {
  padding: 2rem;
}

.tour-header__number {
  line-height: 1;
  font-size: 1.25rem;
  font-weight: 400;
  border: 2px solid var(--white);
  display: inline-flex;
  padding: 0.5em;
  border-radius: 0.66rem;
  margin: 0;
  margin-bottom: 1rem;
}

.tour-header__title {
  font-family: "Libre Baskerville", sans-serif;
  color: var(--white);
  font-size: 2.5rem;
  margin: 0;
  font-weight: 700;
}

.tour-header__author {
  color: hsla(0, 0%, 100%, 0.75);
}
.tour-header_details {
  color: hsla(0, 0%, 100%, 0.75);
}
</style>
