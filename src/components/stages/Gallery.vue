<template>
  <div class="gallery-stage">
    <div class="gallery-stage__thumbnails">
      <figure
        v-for="(image, i) in images"
        :key="i"
        class="gallery__figure"
        @click="handleThumbnailClick(i)"
      >
        <div class="gallery-stage__figure-image-wrap">
          <img :src="image.src" :alt="image.alt" loading="lazy" />
        </div>
        <figcaption
          v-if="image.caption"
          class="gallery-stage__figure-figcaption"
        >
          {{ image.caption }}
        </figcaption>
      </figure>
    </div>
    <Sheet
      class="gallery__sheet"
      :is-open="isSheetOpen"
      @close="handleSheetClose"
    >
      <div v-if="isSheetOpen">
        <figure class="lightbox__figure">
          <img
            :src="images[onStageIndex].src"
            :alt="images[onStageIndex].alt"
          />
          <figcaption
            v-if="images[onStageIndex].caption"
            class="lightbox__figcaption"
          >
            {{ images[onStageIndex].caption }}
          </figcaption>
        </figure>
      </div>
    </Sheet>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import config from "../../config";
import Sheet from "../Sheet/Sheet.vue";

const props = defineProps({
  stage: {
    type: Object,
    required: true,
  },
  locale: {
    type: String,
    default: "en",
  },
});

const onStageIndex = ref(null);
const images = props.stage.images.map((img) => ({
  src: `${config.imageStorageBase}/${img.src}`,
  alt: img.text[props.locale],
  caption: img.text[props.locale],
}));
const isSheetOpen = computed(() => Number.isInteger(onStageIndex.value));

const handleThumbnailClick = (index) => {
  onStageIndex.value = index;
};

const handleSheetClose = () => (onStageIndex.value = null);
</script>
<style scoped>
.gallery-stage {
  margin: 1rem 0;
}

img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
figure {
  margin: 0;
  padding: 0;
}
.gallery-stage__thumbnails {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 1rem;
}
.gallery-stage__figure-image-wrap {
  border: 1px solid #ddd;
  flex: 1;
  overflow: hidden;
}
.gallery__figure {
  display: flex;
  flex-direction: column;
  position: relative;
}
.gallery__figure img {
  transition: all ease 0.5s;
}

.gallery-stage__figure-figcaption {
  font-size: 0.75rem;
  padding: 1rem 1rem;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: hsla(0, 0%, 0%, 0.5);
  color: var(--white);
}

.gallery__figure:before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: hsla(0, 0%, 0%, 0.1);
  opacity: 0%;
  transition: all ease 0.5s;
  z-index: 5;
}
.gallery__figure:hover img {
  transform: scale(101%, 101%);
}

.gallery__figure:hover:before {
  opacity: 100%;
}

.lightbox {
  padding-bottom: 8rem;
  position: relative;
  z-index: 100;
}

.lightbox__figcaption {
  padding: 1rem 0;
  color: var(--gray-lighter);
}
</style>
