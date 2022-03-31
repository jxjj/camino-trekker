<template>
  <div class="input-group">
    <label class="input-group__label sr-only">{{ label }}</label>
    <input class="input-group__input" v-bind="$attrs" />
  </div>
</template>
<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.input-group {
  box-sizing: border-box;
}
.input-group__label {
  display: block;
  font-size: 0.75rem;
  color: #333;
  font-weight: bold;
}
.input-group__input {
  padding: 1rem;
  border: 2px solid var(--black);
  display: block;
  width: 100%;
  border-radius: 0.25rem;
}
</style>
