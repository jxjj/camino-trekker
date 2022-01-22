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
      <div v-else>
        <!-- Make this a skeleton page -->
        {{ stop.stop_content.title }}
      </div>
    </SwiperSlide>
  </Swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { useRouter } from "vue-router";
import TourStop from "../TourStop/TourStop.vue";
import "swiper/css";
import { number, object } from "vue-types";
import { nextTick, ref, watch } from "vue";

const props = defineProps({
  tour: object().isRequired,
  stopIndex: number().def(0),
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
