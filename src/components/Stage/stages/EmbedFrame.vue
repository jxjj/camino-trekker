<template>
  <div class="embed-frame">
    <div v-if="stage">
      <iframe
        width="640"
        height="360"
        :src="source"
        title="Embedded Player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <!-- <iframe height="100%" width="100%" frameBorder="0"></iframe> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["stage"],
  computed: {
    source() {
      return this.stage.source;
    },
  },
};
</script>

<style scoped>
iframe {
  display: block;
  margin: 1rem 0;
  max-width: 100%;
  max-height: 70vh;
}
</style>
