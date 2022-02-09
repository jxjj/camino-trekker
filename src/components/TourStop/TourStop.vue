<template>
  <div class="tour-stop">
    <StopHeader
      :title="isFirstStop ? tour.title : stop.stop_content.title[locale]"
      :subtitle="`${tour.geocoded.city}, ${tour.geocoded.state}`"
      :stopNumber="stopIndex + 1"
      :imageSrc="stop.stop_content?.image?.src"
      :imageAlt="stop.stop_content?.image?.alt?.[locale]"
    >
      <TourAuthor v-if="isFirstStop && tour.author" :author="tour.author" />
    </StopHeader>
    <div class="tour-stop__stages container">
      <h2 v-if="isFirstStop">Start</h2>
      <section v-for="stage in stages" :key="`${stop.id}-${stage.id}`">
        <Stage :stage="stage" :locale="locale" />
      </section>
      <Button
        v-if="!isLastStop"
        icon="arrow_forward"
        iconPosition="end"
        variant="primary"
        @click="$router.push(`/tours/${tour.id}/stops/${stopIndex + 1}`)"
      >
        Continue
      </Button>
    </div>
  </div>
</template>
<script setup>
import Button from "../Button/Button.vue";
import StopHeader from "../StopHeader/StopHeader.vue";
import TourAuthor from "../TourAuthor/TourAuthor.vue";
import Stage from "../Stage/Stage.vue";
import { computed } from "vue";
import { useTour, useLocale } from "../../common/hooks";
import { bool, number, object } from "vue-types";

const props = defineProps({
  stopIndex: number().def(0),
  stop: object().isRequired,
  isLastStop: bool().def(false),
});

const { tour } = useTour();
const { locale } = useLocale();

const isFirstStop = computed(() => props.stopIndex === 0);
const stages = computed(() => props.stop?.stop_content?.stages) || [];
</script>
<style scoped>
.tour-stop {
  position: relative;
}
.tour-stop__stages {
  background: var(--white);
  border-radius: 2rem 2rem 0 0;
  padding-bottom: 5rem;
}
</style>
