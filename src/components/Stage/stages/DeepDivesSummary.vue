<template>
  <div class="stage-deepdive-summary">
    <h3>Deep Dives</h3>

    <Markdown :content="deepDiveSummaryText" />

    <div class="deepdive-select">
      <input
        id="select-all"
        type="checkbox"
        :checked="allSelected"
        @change="toggleSelectAll(!allSelected)"
      />
      <label for="select-all"> Select All </label>
    </div>
    <ul class="deepdive-list">
      <li
        v-for="(deepdive, key) in allDeepDives"
        :key="key"
        class="deepdive-item"
      >
        <DeepDivesSummaryItem
          :id="`deepdive-${key}`"
          :title="deepdive.title[locale]"
          :content="deepdive.text[locale]"
          :checked="isDeepDiveChecked(deepdive)"
          @toggleChecked="(isChecked) => setChecked(deepdive, isChecked)"
        />
      </li>
    </ul>

    <p>Email selected:</p>
    <form class="deepdivesummary-form" @submit.prevent="sendEmail">
      <Input
        v-model="email"
        class="deepdivesummary-form__input"
        type="email"
        placeholder="you@email.com"
        label="email"
        labelHidden
        required
      />
      <Button
        class="deepdivesummary-form__button"
        type="submit"
        icon="send"
        variant="primary"
        iconPosition="end"
      >
        Send
      </Button>
    </form>
    <Error v-if="error"> {{ error }} </Error>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import { useTour, useLocale } from "../../../common/hooks.js";
import Markdown from "../../Markdown/Markdown.vue";
import Error from "../../Error/Error.vue";
import getStagesFromTourWhere from "../../../utils/getStagesFromTourWhere.js";
import DeepDivesSummaryItem from "./DeepDivesSummaryItem.vue";
import Button from "../../Button/Button.vue";
import Input from "../../Input/Input.vue";
import config from "../../../config.js";

const props = defineProps({
  stage: {
    type: Object,
    required: true,
  },
});

const store = useStore();
const { tour } = useTour();
const { locale } = useLocale();
const email = ref("");
const isSendingEmail = ref(false);
const isSent = ref(false);
const error = ref("");
// const success = ref(false);
const deepDiveSummaryText = computed(() => props.stage.text[locale.value]);
const checkedDeepDives = computed(() => store.state.deepDives);
const allDeepDives = computed(() => {
  const deepDiveStages = getStagesFromTourWhere(
    "type",
    "deepdives",
    tour.value
  );
  const allDeepDives = deepDiveStages.flatMap((stage) => stage.deepdives);
  return allDeepDives;
});

const allSelected = computed(
  () => allDeepDives.value.length === checkedDeepDives.value.length
);

function isDeepDiveChecked(deepDive) {
  return checkedDeepDives.value.indexOf(deepDive) !== -1;
}

const setChecked = (deepdive, isChecked) => {
  console.log({ deepdive, isChecked });
  return isChecked
    ? store.dispatch("addDeepDive", deepdive)
    : store.dispatch("removeDeepDive", deepdive);
};

function toggleSelectAll(selectAll) {
  allDeepDives.value.forEach((d) =>
    selectAll
      ? store.dispatch("addDeepDive", d)
      : store.dispatch("removeDeepDive", d)
  );
}

function sendEmail() {
  isSendingEmail.value = true;
  axios
    .post(`${config.apiBaseUrl}/emailDeepDives`, {
      email,
      deepDives: checkedDeepDives.value,
    })
    .then((response) => {
      console.log({ response });
      isSendingEmail.value = false;
      isSent.value = true;
      email.value = "";
    })
    .catch((err) => {
      isSendingEmail.value = false;
      isSent.value = false;
      error.value = err.message;
    });
}
</script>

<style scoped>
.stage-deepdive-summary {
  background: #f0f0f0;
  padding: 2rem;
  margin: 1rem 0;
  border-radius: 0.5rem;
}

.deepdive-select {
  padding: 0.5rem 0;
  display: grid;
  grid-template-columns: max-content 1fr auto;
  align-items: center;
  gap: 1rem;
  font-size: 0.9rem;
}
.deepdive-select input {
  width: 1rem;
  height: 1rem;
}

.btn-link {
  border: 0;
  background: transparent;
  text-decoration: underline;
}

.deepdive-list {
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #e0e0e0;
}
.deepdive-item {
  border-top: 1px solid #e0e0e0;
  padding: 0.5rem 0;
}
.deepdivesummary-form {
  display: grid;
  grid-template-columns: 1fr auto;
  max-width: 30rem;
}
.deepdivesummary-form__input :deep(input) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid var(--gray);
  background: #fff;
  z-index: 1;
}
.deepdivesummary-form__button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
