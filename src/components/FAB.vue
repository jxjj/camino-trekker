<template>
  <!-- Floating Action Button -->
  <button class="fab">
    <span class="sr-only">{{ alt }}</span>
    <span class="material-icons">arrow_forward</span>
  </button>
</template>
<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});
</script>
<style scoped>
.fab {
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: var(--yellow);
  box-shadow: 0px 0.25rem 0.5rem hsl(0deg 0% 0% / 15%);
  border: 1px solid hsla(0, 0%, 0%, 0.1);
}
</style>
