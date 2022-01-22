<template>
  <Swiper
    :slides-per-view="1"
    :space-between="16"
    :initialSlide="stopIndex"
    @swiper="onSwiper"
    @slideChangeTransitionEnd="onSlideChange"
  >
    <SwiperSlide
      v-for="(stop, index) in tour.stops"
      :key="index"
      :autoHeight="true"
    >
      <TourStop v-if="stopIndex === index" :stop="stop" :stopIndex="index" />
      <TourStopSkeleton
        v-else
        :tour="tour"
        :stopIndex="index"
        :locale="locale"
      />
    </SwiperSlide>
  </Swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { useRouter } from "vue-router";
import { number, object, string } from "vue-types";
import { nextTick, ref, watch } from "vue";
import TourStopSkeleton from "../TourStopSkeleton/TourStopSkeleton.vue";
import TourStop from "../TourStop/TourStop.vue";
import "swiper/css";

const props = defineProps({
  tour: object().isRequired,
  stopIndex: number().def(0),
  locale: string().isRequired,
});

const swiperRef = ref(null);
const router = useRouter();

function onSwiper(swiper) {
  swiperRef.value = swiper;
}

function onSlideChange(event) {
  // update route
  nextTick(() => {
    router.push(`/tours/${props.tour.id}/stops/${event.activeIndex}`);
  });
}

/**
 * hack to make swiper set the correct active slide
 * if the stopIndex props changes. for example, if the user
 * selects a new route from the bottom nav, and not via swiping in slider
 */
watch(
  () => props.stopIndex,
  () => {
    if (!swiperRef.value) return;
    swiperRef.value.slideTo(props.stopIndex, 0);
  }
);
</script>
