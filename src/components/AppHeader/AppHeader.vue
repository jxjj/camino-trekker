<template>
  <header class="app-header container">
    <slot>
      <img :src="umnLogo" alt="University of Minnesota" />
      <h1>Camino</h1>
    </slot>
  </header>
</template>
<script setup>
import umnLogo from "../../assets/umn-logo.svg";
</script>
<style scoped postcss>
.app-header {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  background: #fff;
  border-top: 0.25rem solid var(--gold);
  z-index: 100;
  padding: 1.5rem 2rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}
</style>
<style>
.app-header > * {
  font-size: 1.25rem;
  line-height: 1;
  margin: 0;
  font-weight: 600;
}
</style>
