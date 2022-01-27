<template>
  <div class="ar-page">
    <AR
      :stage="stage"
      :locale="locale"
      :currentStopTargetPoint="currentStopTargetPoint"
    />
  </div>
</template>
<script setup>
import { computed } from "vue";
import AR from "../components/Stage/stages/AR.vue";
import { useTour, useLocale, useStopIndex } from "../common/hooks.js";
import { getStagesFromStopWhere } from "../utils";

const { tour } = useTour();
const { locale } = useLocale();
const { stopIndex } = useStopIndex();
const stop = computed(() => tour.stops[stopIndex]);
// a stop could have multiple AR stages,
// so we need to find the correct one
const arStages = computed(() => getStagesFromStopWhere("type", "ar", stop));
const arStageIndex = 0;
const stage = arStages[arStageIndex];

const currentStopTargetPoint = computed(
  () =>
    getStagesFromStopWhere("type", "navigation", stop)?.targetPoint ||
    tour.value.start_location
);
</script>
