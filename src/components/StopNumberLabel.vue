<template>
  <div class="stop-number-label">
    <slot>n</slot>
  </div>
</template>
<script setup></script>
<style scoped>
.stop-number-label {
  font-size: 0.875rem;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* padding: 0.5rem; */
  font-weight: 600;
  min-width: 2rem;
  min-height: 2rem;
  border: 0.125rem solid var(--black);
  border-radius: 0.5rem;
}
</style>
