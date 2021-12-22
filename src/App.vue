<script setup>
import api from "./api/index.js";

const tours = await api.tours.list();
</script>

<template>
  <h1>Camino</h1>
  <main>
    <h2>Tours</h2>
    <ul>
      <li v-for="tour of tours">
        <router-link :to="`/tour/${id}`">{{ tour.name }}</router-link>
      </li>
    </ul>
  </main>
</template>

<style></style>
