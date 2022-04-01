<template>
  <div class="input-group">
    <label
      class="input-group__label"
      :class="{
        'sr-only': labelHidden,
      }"
      >{{ label }}</label
    >
    <input class="input-group__input" v-bind="$attrs" />
  </div>
</template>
<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  labelHidden: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.input-group {
  box-sizing: border-box;
}
.input-group__label {
  display: block;
  font-size: 0.875rem;
  color: #404040;
  font-weight: 500;
}
.input-group__input {
  background: var(--gray-lighter);
  padding: 1rem;
  /* border: 1px solid var(--gray); */
  border: none;
  display: block;
  width: 100%;
  border-radius: 0.25rem;
  filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
}
</style>
