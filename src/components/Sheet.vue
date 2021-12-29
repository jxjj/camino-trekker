<template>
  <aside class="sheet" :class="{ 'sheet--is-open': isOpen }">
    <div class="sheet__inner">
      <header class="sheet__header">
        <h2 class="sheet__title">{{ title }}</h2>
        <button class="sheet__close-button" @click="$emit('close')">
          <span class="material-icons">close</span>
          <span class="sr-only">Close</span>
        </button>
      </header>
      <div class="sheet__body">
        <slot>Sheet Contents</slot>
      </div>
    </div>
  </aside>
</template>
<script setup>
defineEmits(["close"]);
defineProps({
  title: {
    type: String,
    default: "",
  },
  isOpen: {
    type: Boolean,
    default: true,
  },
});
</script>

<style scoped>
.sheet {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -10;
  height: 100vh;
  width: 100vw;
  transition: all ease-out 0.2s;
}

.sheet.sheet--is-open {
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
}
.sheet__inner {
  border-radius: 1.5rem 1.5rem 0 0;
  background: var(--black);
  height: 100%;
  margin-top: 5vh;
  overflow-y: auto;
  color: var(--gray-dark);
  transform: translate3d(0, 100vh, 0);
  transition: all ease-out 0.2s;
  padding: 2rem;
}

.sheet.sheet--is-open .sheet__inner {
  transform: translate3d(0, 0, 0);
}

.sheet__header {
  display: grid;
  grid-template-columns: 2rem 1fr 2rem;
  grid-template-rows: 2rem auto;
  align-items: center;
  justify-content: center;
  padding-bottom: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--gray-dark);
}
.sheet__title {
  grid-column: 1 / -1;
  grid-row: 1;
  color: var(--gray-light);
  font-size: 1.5rem;
  line-height: 1;
  font-weight: 600;
  margin: 0;
  text-align: center;
}

.sheet__close-button {
  grid-column: -2 / -1;
  grid-row: 1;
  z-index: 10;
  background: transparent;
  color: var(--gray-light);
  border: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all ease-out 0.2s;
}

.sheet__close-button:hover {
  background: var(--white);
  color: var(--system-red);
}
</style>
