<template>
  <div class="tour-stop">
    <StopHeader
      :title="stopIndex === 0 ? tour.title : stop.stop_content.title[locale]"
      :subtitle="`${tour.geocoded.city}, ${tour.geocoded.state}`"
      :stopNumber="stopIndex + 1"
      :imageSrc="stop.stop_content?.image?.src"
      :imageAlt="stop.stop_content?.image?.alt?.[locale]"
    />
    <div class="tour-stop__stages container">
      <div class="skeleton-block skeleton--small"></div>
      <div class="skeleton-block skeleton-block--medium"></div>
      <div class="skeleton-block skeleton-block--large"></div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import StopHeader from "../StopHeader/StopHeader.vue";
import { number, object, string } from "vue-types";

const props = defineProps({
  tour: object().isRequired,
  locale: string().isRequired,
  stopIndex: number().def(0),
});

const stop = computed(() => props.tour.stops[props.stopIndex]);
</script>
<style scoped>
.tour-stop {
  position: relative;
}
.tour-stop__stages {
  background: var(--white);
  border-radius: 2rem 2rem 0 0;
  padding-bottom: 12rem;
}
.tour-stop__prev-button {
  position: fixed;
  bottom: 5rem;
  left: 2rem;
}
.tour-stop__next-button {
  position: fixed;
  bottom: 5rem;
  right: 2rem;
}

.skeleton-block {
  height: 1.25rem;
  width: 100%;
  margin: 1rem 0;
  background: var(--gray-light);
  background: var(--gray-lighter)
    linear-gradient(
      90deg,
      var(--gray-lighter) 0,
      #fafafa 2rem,
      var(--gray-lighter) 4rem
    );
  background-size: 10rem;
  background-position: 0 0;
  background-repeat: no-repeat;
  animation: shine-lines 1.6s infinite linear;
  border-radius: 0.5rem;
}

.skeleton-block--medium {
  height: 5rem;
}

.skeleton-block--large {
  height: 8rem;
}

@keyframes shine-lines {
  0% {
    background-position: -100%;
  }
  40%,
  100% {
    background-position: 200%;
  }
}
</style>
