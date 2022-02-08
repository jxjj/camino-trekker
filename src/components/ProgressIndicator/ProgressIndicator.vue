<template>
  <ol class="progress-indicator">
    <li
      v-for="(_, index) in items"
      :key="index"
      class="item"
      :class="{
        'item--is-active': isActive(index),
      }"
    >
      <span class="item__dot material-icons">circle</span>
      <span class="item__index">{{ index === 0 ? "Start" : index + 1 }}</span>
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.item__dot {
  font-size: 0.5rem;
  color: hsla(0, 0%, 0%, 0.25);
}
.item__index {
  display: none;
}

.item--is-active .item__index {
  color: hsla(0, 0%, 0%, 1);
  font-size: 0.75rem;
  display: inline-flex;
}
.item--is-active .item__dot {
  display: none;
}
</style>
