<template>
  <header class="stop-header">
    <div class="stop-header__content">
      <p class="stop-header__number">
        {{ stopNumber }}
      </p>
      <h2 class="stop-header__title h2">{{ title }}</h2>
      <p v-if="subtitle" class="stop-header__subtitle">{{ subtitle }}</p>
    </div>
    <div class="stop-header__img-container">
      <img
        v-if="imageSrc"
        class="stop-header__img"
        :src="imageSrc"
        :alt="imageAlt"
      />
    </div>
  </header>
</template>
<script setup>
import { number, string } from "vue-types";

defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  stopNumber: number().isRequired,
  imageSrc: string(),
  imageAlt: string(),
});
</script>
<style scoped>
.stop-header {
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

.stop-header__img-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: var(--white);
  border-radius: 2rem 2rem 0 0;
  z-index: -10;
}
.stop-header__img-container:before {
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

.stop-header__img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.stop-header__content {
  padding: 2rem;
}

.stop-header__number {
  line-height: 1;
  font-size: 1rem;
  font-weight: 400;
  border: 2px solid var(--white);
  display: inline-flex;
  padding: 0.5em;
  border-radius: 0.5rem;
  margin: 0;
  margin-bottom: 1rem;
}

.stop-header__title {
  font-family: "Libre Baskerville", sans-serif;
  color: var(--white);
  font-size: 2.5rem;
  margin: 0;
  font-weight: 700;
}

.stop-header__author {
  color: hsla(0, 0%, 100%, 0.75);
}
.stop-header_details {
  color: hsla(0, 0%, 100%, 0.75);
}
</style>
