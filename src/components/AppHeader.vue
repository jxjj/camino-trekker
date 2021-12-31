<template>
  <header class="app-header container">
    <slot>
      <img :src="umnLogo" alt="University of Minnesota" />
      <h1>Camino</h1>
    </slot>
  </header>
</template>
<script setup>
import umnLogo from "../assets/umn-logo.svg";
</script>
<style scoped>
.app-header {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  background: var(--translucent-color);
  backdrop-filter: var(--translucent-filter);
  border-top: 0.25rem solid var(--gold);
}
</style>
<style>
.app-header > * {
  font-size: 1.25rem;
  line-height: 1;
  margin: 0;
}
</style>
