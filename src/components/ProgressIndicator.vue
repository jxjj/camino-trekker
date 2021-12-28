<template>
  <ol class="progress-indicator">
    <li
      v-for="(_, index) in items"
      :key="index"
      class="item"
      :class="{
        'item--is-active': isActive(index),
        'material-icons': isMiddle(index),
      }"
    >
      {{ isStart(index) ? "Start" : "" }}
      {{ isMiddle(index) ? "circle" : "" }}
      {{ !isStart(index) && isEnd(index) ? "End" : "" }}
    </li>
  </ol>
</template>
<script setup>
import { computed } from "vue";
import range from "lodash/range";

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
  active: {
    type: Number,
    required: true,
  },
});

const items = computed(() => range(props.total));
const isActive = (index) => index === props.active;
const isStart = (index) => index === 0;
const isEnd = (index) => index === props.total - 1;
const isMiddle = (index) => !isStart(index) && !isEnd(index);
</script>

<style scoped>
.progress-indicator {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin: 0;
  padding: 0;
}
.item {
  font-size: 0.75rem;
  color: hsla(0, 0%, 100%, 0.25);
}
.item--is-active {
  color: hsla(0, 0%, 100%, 1);
}
</style>
