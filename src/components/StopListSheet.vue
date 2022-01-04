<template>
  <Sheet class="stoplist-sheet" title="Tour Stops">
    <ol class="stoplist">
      <router-link
        v-for="(stop, index) in stops"
        :key="stop.id"
        :to="`/tours/${stop.tour_id}/stops/${index}`"
        @click="$emit('close')"
      >
        <li
          class="stoplist__item"
          :class="{ 'stoplist__item--is-active': isActive(index) }"
        >
          <div class="stoplist__number">
            {{ index + 1 }}
          </div>
          {{ getStopTitle(stop) }}
        </li>
      </router-link>
    </ol>
  </Sheet>
</template>
<script setup>
import { inject } from "vue";
import Sheet from "./Sheet.vue";

const props = defineProps({
  stops: {
    type: Array,
    required: true,
  },
  activeStopIndex: {
    type: Number,
    required: true,
  },
});

const currentLocale = inject("currentLocal", "en");

const isActive = (index) => index === props.activeStopIndex;
const getStopTitle = (stop) => stop.stop_content.title[currentLocale];
</script>
<style scoped>
.stoplist {
  list-style: none;
  padding: 0;
}

.stoplist a {
  color: var(--gray-dark);
  text-decoration: none;
}

.stoplist__item {
  --text-color: var(--gray-dark);
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  font-size: 1.25rem;
  border-radius: 0.5rem;
  transition: all ease 0.2s;
}

.stoplist__item:hover:not(.stoplist__item--is-active),
.stoplist__item:focus:not(.stoplist__item--is-active) {
  color: var(--gray-light);
}

.stoplist__item:hover:not(.stoplist__item--is-active) .stoplist__number,
.stoplist__item:focus:not(.stoplist__item--is-active) .stoplist__number {
  border-color: var(--gray-light);
}

.stoplist__item:active,
.stoplist__item--is-active {
  color: var(--black);
  background: var(--gray-light);
}

.stoplist__item:active .stoplist__number,
.stoplist__item--is-active .stoplist__number {
  border-color: var(--black);
}

.stoplist__number {
  font-size: 0.875rem;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  min-width: 2rem;
  min-height: 2rem;
  border: 0.125rem solid var(--gray-dark);
  border-radius: 0.5rem;
}
</style>
