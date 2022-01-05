<template>
  <header class="stop-header">
    <div class="stop-header__content">
      <p>
        <span class="stop-header__number">{{ stopIndex }}</span>
      </p>
      <h2 class="stop-header__title h2">{{ title }}</h2>
      <p v-if="subtitle" class="stop-header__subtitle">{{ subtitle }}</p>
    </div>
    <div class="stop-header__img-container">
      <img
        v-if="!!stopImage"
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
const title = computed(
  () => props.stop.stop_content?.title?.[locale] ?? "This Stop"
);
const subtitle = computed(
  () => props.stop.stop_content?.subtitle?.[locale] ?? ""
);
const stopImage = computed(() => props.stop.stop_content?.image ?? null);
</script>
<style scoped>
.stop-header {
  position: relative;
  padding: 4rem 2rem;
  overflow: hidden;
  background: var(--blue-light) url("../assets/wiggle.svg");
}

.stop-header:after {
  content: "";
  width: 66%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  /* transform: translate(-50%, -50%); */
  background: hsla(0, 0%, 100%, 0.75);
  animation: morph 30s ease infinite alternate-reverse;
}

.stop-header__content {
  grid-column: 1 / -1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
  position: relative;
}

.stop-header__number {
  display: inline-flex;
  border: 2px solid var(--black);
  border-radius: 0.25rem;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.25rem;
  line-height: 1;
  position: relative;
}

.stop-header__img-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.stop-header__title {
  font-size: 2rem;
  margin: 0;
}

.stop-header__subtitle {
  color: var(--black);
  margin: 0.5rem 0;
  /* improve legibility when text overlays image */
  text-shadow: 0 1px 4px hsla(0, 0%, 100%, 0.5);
}
.stop-header__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 23% 77% 29% 71% / 19% 30% 70% 81%;
  overflow: hidden;
  animation: morph 37s ease infinite alternate, color-rotate 30s linear infinite;
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

@keyframes color-rotate {
  from {
    filter: grayscale(1) sepia(1) hue-rotate(0deg) brightness(1);
  }
  to {
    filter: grayscale(1) sepia(1) hue-rotate(360deg) brightness(1);
  }
}
</style>
