<script setup>
import { onMounted, ref } from "vue";
import api from "../api/index.js";

const tours = ref([]);

onMounted(async () => {
  tours.value = await api.tours.list();
});
</script>

<template>
  <h1>Camino</h1>
  <ul v-if="tours.length">
    <li v-for="tour in tours">
      {{ tour.title }}
    </li>
  </ul>
</template>

<style></style>
