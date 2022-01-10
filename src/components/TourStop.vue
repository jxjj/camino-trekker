<template>
  <div class="tour-stop">
    <TourHeader
      v-if="isFirstStop"
      class="container"
      :tour="tour"
      :stopIndex="stopIndex"
    />
    <StopHeader v-else :stop="stop" :stopIndex="stopIndex" />
    <div class="tour-stop__stages container">
      <h2 v-if="stopIndex === 0">Start</h2>
      <section v-for="stage in stages" :key="stage.id">
        <Stage :stage="stage" :locale="locale" />
      </section>
      <Button
        v-if="stopIndex !== tour?.stops?.length - 1"
        icon="arrow_forward"
        iconPosition="end"
        variant="primary"
        @click="$router.push(nextStopUrl)"
      >
        Continue
      </Button>
    </div>
    <router-link
      v-if="!isFirstStop"
      :to="`/tours/${tour.id}/stops/${stopIndex - 1}`"
    >
      <FAB
        v-if="!isFirstStop"
        class="tour-stop__prev-button"
        icon="arrow_back"
        alt="Previous Stop"
      />
    </router-link>
    <router-link
      v-if="!isLastStop"
      :to="`/tours/${tour.id}/stops/${stopIndex + 1}`"
    >
      <FAB
        class="tour-stop__next-button"
        icon="arrow_forward"
        alt="Next Stop"
      />
    </router-link>
  </div>
</template>
<script setup>
import Button from "./Button.vue";
import StopHeader from "./StopHeader.vue";
import TourHeader from "./TourHeader.vue";
import Stage from "./Stage.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import FAB from "./FAB.vue";

const store = useStore();
const stopIndex = computed(() => store.getters.stopIndex);
const tour = computed(() => store.state.tour);
const stop = computed(() => store.getters.currentStop);
const isFirstStop = computed(() => store.getters.isFirstStop);
const isLastStop = computed(() => store.getters.isLastStop);
const stages = computed(() => stop.value?.stop_content?.stages) || [];
const locale = computed(() => store.state.locale);
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
</style>
