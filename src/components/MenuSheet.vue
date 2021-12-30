<template>
  <Sheet class="menu-sheet" title="Menu" :is-open="isOpen">
    <ol class="menu-sheet__list">
      <router-link v-for="(item, i) in menuItems" :key="i" :href="item.href">
        <li class="menu-sheet__list-item">
          <span v-if="!!item.icon" class="material-icons">{{ item.icon }}</span>
          <span>{{ item.text }}</span>
        </li>
      </router-link>
    </ol>
  </Sheet>
</template>
<script setup>
import Sheet from "./Sheet.vue";
defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const menuItems = [
  {
    icon: "home",
    text: "Home",
    href: "#!",
  },
  {
    icon: "map",
    text: "Map",
    href: "#!",
  },
  {
    icon: "settings",
    text: "Settings",
    href: "#!",
  },
  {
    icon: "help_outline",
    text: "Help",
    href: "#!",
  },
];
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
