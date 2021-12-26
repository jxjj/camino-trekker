<script setup>
import { onMounted, ref } from "vue";
import api from "../api/index.js";

const tours = ref([]);

onMounted(async () => {
  tours.value = await api.tours.list();
});
</script>

<template>
  <div class="home-page container">
    <h1>Camino</h1>
    <ul v-if="tours.length">
      <li v-for="tour in tours" :key="tour.id">
        <router-link :to="`/tour/${tour.id}`">
          {{ tour.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style></style>
