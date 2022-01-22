<template>
  <Swiper
    :slides-per-view="1"
    :space-between="16"
    :initialSlide="initialSlide"
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

const initialSlide = ref(props.stopIndex);
const swiperRef = ref(null);

const router = useRouter();

function onSwiper(swiper) {
  swiperRef.value = swiper;
  console.log({ swiper });
}

function onSlideChange(event, args) {
  console.log({ swiperRef: swiperRef.value });
  console.log("slideChange", { event, args });
  initialSlide.value = event.activeIndex;
  if (swiperRef.value) {
    swiperRef.value.initialSlide = initialSlide.value;
  }
  // update route
  nextTick(() => {
    router.push(`/tours/${props.tour.id}/stops/${initialSlide.value}`);
    // swiper.value.slideTo(event.activeIndex, 0);
    console.log(initialSlide.value);
    swiperRef.value.update();
  });
}

watch(
  () => props.stopIndex,
  () => {
    if (swiperRef.value) {
      swiperRef.value.slideTo(props.stopIndex, 0);
    }
  }
);
</script>
