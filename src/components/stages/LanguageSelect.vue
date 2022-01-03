<template>
  <div class="language-select-stage">
    <h2>Language Selector</h2>
    <form @submit.prevent="handleSubmit">
      <label
        v-for="(locale, index) in locales"
        :key="index"
        class="input-group"
      >
        <input
          name="locale"
          type="radio"
          :value="locale"
          :checked="form.locale === locale"
          @change="handleChange(locale)"
        />
        {{ locale }}
      </label>
      <Button class="save-button" type="submit" variant="primary">Save</Button>
    </form>
  </div>
</template>

<script setup>
import { inject, reactive } from "vue";
import Button from "../Button.vue";

const locales = inject("locales", ["en"]);
const currentLocale = inject("currentLocale", "en");
const setCurrentLocale = inject("setCurrentLocale", (locale) => {
  console.error(
    `Unable to set locale to ${locale}. No function setCurrentLocale is defined`
  );
});

const form = reactive({
  locale: currentLocale,
});

const handleChange = (locale) => {
  form.locale = locale;
};

const handleSubmit = () => setCurrentLocale(form.locale);
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
