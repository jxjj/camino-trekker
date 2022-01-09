<template>
  <div class="tour-stop">
    <TourHeader
      v-if="stopIndex === 0"
      class="container"
      :tour="tour"
      :stopIndex="stopIndex"
    />
    <StopHeader v-else :stop="stop" :stopIndex="stopIndex" />
    <div class="tour-page__stages container">
      <h2 v-if="stopIndex === 0">Start</h2>
      <section v-for="stage in stop.stop_content.stages" :key="stage.id">
        <Stage :stage="stage" />
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
import { computed, inject } from "vue";

const stopIndex = inject("stopIndex", 0);
const tour = inject("tour", null);
const stop = computed(() => tour?.stops?.[stopIndex]);
</script>
