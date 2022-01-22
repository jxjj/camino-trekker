<template>
  <Swiper
    :modules="[Virtual]"
    :slides-per-view="1"
    :space-between="16"
    virtual
    :initialSlide="stopIndex"
    :addSlidesAfter="2"
    :addSlidesBefore="2"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <SwiperSlide
      v-for="(stop, index) in tour.stops"
      :key="index"
      :virtualIndex="index"
      :autoHeight="true"
    >
      <TourStop :stop="stop" :stopIndex="index" />
    </SwiperSlide>
  </Swiper>
</template>
<script setup>
import { Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useRouter } from "vue-router";
import TourStop from "../TourStop/TourStop.vue";
import "swiper/css";
import { number, object } from "vue-types";
import { nextTick } from "vue";

const props = defineProps({
  tour: object().isRequired,
  stopIndex: number().def(0),
});

const router = useRouter();

function onSwiper(event) {
  console.log("onSwiper", { event });
}

function onSlideChange(event) {
  // update route
  nextTick(() => {
    router.push(`/tours/${props.tour.id}/stops/${event.activeIndex}`);
  });
}
</script>
