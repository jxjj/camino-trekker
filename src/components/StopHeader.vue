<template>
  <header class="stop-header container">
    <div class="stop-header__content">
      <p class="stop-header__number">{{ stopIndex }}</p>
      <h2 class="stop-header__title">{{ title }}</h2>
      <p v-if="subtitle" class="stop-header__subtitle h2">{{ subtitle }}</p>
    </div>
    <div class="stop-header__img-container">
      <img
        class="stop-header__img"
        :src="stopImage.src"
        :alt="stopImage.alt[locale]"
      />
    </div>
  </header>
</template>
<script setup>
import { computed, inject } from "vue";

const props = defineProps({
  stop: {
    type: Object,
    required: true,
  },
  stopIndex: {
    type: Number,
    required: true,
  },
});

const locale = inject("currentLocale", "en");
const title = computed(() => props.stop.stop_content.title[locale]);
const subtitle = computed(() => props.stop.stop_content.subtitle[locale]);
const stopImage = computed(() => props.stop.stop_content.image);
</script>
<style scoped>
.tour-header {
  position: relative;
  display: grid;
  padding: 4rem 2rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  overflow: hidden;
  /* background: var(--blue-light) url("../assets/topography.svg"); */
}

.tour-header:before,
.tour-header:after {
  content: "";
  width: 66%;
  height: 66%;
  position: absolute;
  top: 5%;
  left: 5%;
  z-index: 2;
  background: hsl(188deg 89% 83% / 49%);
  animation: morph 40s ease infinite alternate, spin 40s linear infinite,
    move 40s linear infinite alternate;
  transform: translate3d(10vw, 20vw, 30vw);
}

.tour-header:after {
  z-index: 1;
  background: hsla(0, 0%, 100%, 0.5);
  animation: morph 30s ease infinite alternate-reverse,
    spin 40s linear infinite reverse,
    move-2 30s linear infinite alternate-reverse;
  /* transform: translate3d(10vw, 20vw, 30vw); */
}

.tour-header__content {
  grid-column: 1 / -1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
}

.tour-header__img-container {
  grid-column: 2 / span 2;
  grid-row: 1;
  z-index: 4;
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
  margin: 0.5rem 0;
  /* improve legibility when text overlays image */
  text-shadow: 0 1px 4px hsla(0, 0%, 100%, 0.5);
}
.highlight {
  background: linear-gradient(
    to top,
    transparent 20%,
    var(--yellow) 20%,
    var(--yellow) 66%,
    transparent 66%
  );
  border-radius: 0.25rem;
}
.tour-header__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1) sepia(1) hue-rotate(310deg) brightness(1.5);
  border-radius: 23% 77% 29% 71% / 19% 30% 70% 81%;
  overflow: hidden;
  animation: morph 37s ease infinite alternate;
}

@keyframes morph {
  0% {
    border-radius: 23% 77% 29% 71% / 19% 30% 70% 81%;
  }
  33% {
    border-radius: 47% 53% 38% 62% / 68% 30% 70% 32%;
  }
  66% {
    border-radius: 60% 40% 65% 35% / 68% 65% 35% 32%;
  }
  100% {
    border-radius: 86% 14% 87% 13% / 26% 77% 23% 74%;
  }
}

@keyframes move {
  0% {
    transform: translate3d(0, 0, 0);
  }
  25% {
    transform: translate3d(7vw, 5vw, 0);
  }
  50% {
    transform: translate3d(9vw, 8vw, 0);
  }
  75% {
    transform: translate3d(13vw, 11vw, 0);
  }
  100% {
    transform: translate3d(14vw, 12vw, 0);
  }
}

@keyframes move-2 {
  0% {
    transform: translate3d(10%, 5%, 0);
  }
  25% {
    transform: translate3d(13%, 12%, 0);
  }
  50% {
    transform: translate3d(12%, 15%, 0);
  }
  75% {
    transform: translate3d(15%, 13%, 0);
  }
  100% {
    transform: translate3d(25%, 18%, 0);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
