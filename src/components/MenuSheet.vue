<template>
  <Sheet class="menu-sheet" title="Menu" :is-open="isOpen">
    <ol class="menu-sheet__list">
      <a v-for="(item, i) in items" :key="i" :href="item.href">
        <li
          class="menu-sheet__list-item"
          :class="{ 'menu-sheet__list-item--is-active': isActiveIndex(i) }"
        >
          <span v-if="!!item.icon" class="material-icons">{{ item.icon }}</span>
          <span>{{ item.text }}</span>
        </li>
      </a>
    </ol>
  </Sheet>
</template>
<script setup>
import { computed } from "vue";
import Sheet from "./Sheet.vue";
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  items: {
    type: Array,
    default: () => [],
  },
  activeIndex: {
    type: Number,
    default: 0,
  },
});

const isActiveIndex = (index) => computed(() => index === props.activeIndex);
</script>
<style scoped>
.menu-sheet a {
  color: var(--gray-dark);
  text-decoration: none;
}

.menu-sheet__list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.menu-sheet__list-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  font-size: 1.25rem;
  border-radius: 0.5rem;
  transition: all ease-out 0.2s;
}

.menu-sheet__list-item:hover,
.menu-sheet__list-item:focus {
  color: var(--gray-light);
}
.menu-sheet__list-item:active {
  color: var(--black);
  background: var(--gray-light);
}
</style>
