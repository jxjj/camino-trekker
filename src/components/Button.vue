<template>
  <button class="button" :class="classMap">
    <span v-if="!!icon" class="material-icons">{{ icon }}</span>
    <slot>Button Text</slot>
  </button>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps({
  icon: {
    type: String,
  },
  variant: {
    type: String,
    validator(str) {
      return ["primary", "secondary"].includes(str);
    },
  },
  iconPosition: {
    type: String,
    default: "before",
  },
});

const classMap = computed(() => ({
  "button--primary": props.variant === "primary",
  "button--icon-position-end": props.iconPosition === "end",
}));
</script>
<style scoped>
.button {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.75rem 1.25rem;
  border: 0.125rem solid var(--black);
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--black);
  background-color: transparent;
  transition: all ease-out 0.1s;
}

.button--icon-position-end {
  flex-direction: row-reverse;
}

.material-icons {
  font-size: 1.25rem;
}

.button:hover {
  background: hsla(0, 0%, 0%, 0.1);
}

.button--primary {
  color: var(--gray-lighter);
  border-color: var(--black);
  background: var(--black);
}
.button--primary:hover {
  outline: 0.25rem solid var(--black);
  border-color: var(--white);
  color: var(--white);
  background: var(--black);
}
</style>
