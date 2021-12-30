<template>
  <header class="app-header">
    <slot>App Header</slot>
  </header>
</template>
<script setup></script>
<style scoped>
.app-header {
  padding: 1rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  background: var(--translucent-color);
  backdrop-filter: var(--translucent-filter);
  border-bottom: 1px solid var(--gray-light);
}
</style>
<style>
.app-header > * {
  font-size: 1.25rem;
  line-height: 1;
  margin: 0;
}
</style>
