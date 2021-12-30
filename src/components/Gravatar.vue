<template>
  <div class="gravatar">
    <img
      :src="`https://www.gravatar.com/avatar/${emailHash}?s=${size}`"
      :alt="name"
    />
  </div>
</template>
<script setup>
import { computed } from "vue";
import md5 from "md5";

const props = defineProps({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 200,
  },
});

// see: https://en.gravatar.com/site/implement/hash/
const toHash = (str) => md5(str.trim().toLowerCase());
const emailHash = computed(() => toHash(props.email));
</script>
<style scoped>
.gravatar {
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  border: 0.125rem solid hsla(0, 0%, 0%, 0.25);
  overflow: hidden;
}

.gravatar img {
  max-width: 100%;
}
</style>
