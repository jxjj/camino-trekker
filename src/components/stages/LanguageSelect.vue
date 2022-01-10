<template>
  <div class="language-stage">
    <form
      v-if="locales.length > 1"
      class="lanugage-stage__form"
      @submit.prevent="handleSubmit"
    >
      <h3>Language</h3>
      <label
        v-for="(localeChoice, index) in locales"
        :key="index"
        class="input-group"
      >
        <input
          name="locale"
          type="radio"
          :value="localeChoice"
          :checked="selectedLocale === localeChoice"
          @change="handleChange(localeChoice)"
        />
        {{ locale }}
      </label>
      <Button class="save-button" type="submit" variant="primary">Save</Button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import Button from "../Button.vue";

const props = defineProps({
  stage: {
    type: Object,
    required: true,
  },
  locale: {
    type: String,
    required: true,
  },
});

const store = useStore();
const locales = computed(() => store.state.tour.tour_content.languages);
const selectedLocale = ref(props.locale);

const handleChange = (locale) => {
  selectedLocale.value = locale;
};
const handleSubmit = () => store.dispatch("setLocale", selectedLocale.value);
</script>
<style scoped>
.input-group {
  display: block;
  padding: 0.5rem 0;
}

.save-button {
  margin: 1rem 0;
}
</style>
