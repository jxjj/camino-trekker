<template>
  <div class="tour-stop">
    <TourHeader
      v-if="stopIndex === 0"
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
      <footer class="tour-page__stop-footer">
        <Button
          v-if="stopIndex !== tour?.stops?.length - 1"
          icon="arrow_forward"
          iconPosition="end"
          variant="primary"
          @click="$router.push(nextStopUrl)"
        >
          Continue
        </Button>
      </footer>
    </div>
  </div>
</template>
<script setup>
import Button from "./Button.vue";
import StopHeader from "./StopHeader.vue";
import TourHeader from "./TourHeader.vue";
import Stage from "./Stage.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const stopIndex = computed(() => store.getters.stopIndex);
const tour = computed(() => store.state.tour);
const stop = computed(() => store.getters.currentStop);
const stages = computed(() => stop.value?.stop_content?.stages) || [];
const locale = computed(() => store.state.locale);
</script>
<style scope>
.tour-stop__stages {
  background: var(--white);
  border-radius: 2rem 2rem 0 0;
  padding-bottom: 12rem;
}
</style>
