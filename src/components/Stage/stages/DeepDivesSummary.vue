<template>
  <div class="stage-deepdive-summary">
    <h3>Deep Dives</h3>

    <Markdown :content="deepDiveSummaryText" />
    <div v-if="stage.request_email" class="deepdive-select">
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
          :checkboxHidden="!stage.request_email"
          @toggleChecked="(isChecked) => setChecked(deepdive, isChecked)"
        />
      </li>
    </ul>
    <form
      v-if="stage.request_email"
      class="deepdivesummary-form"
      @submit.prevent="sendEmail"
    >
      <Input
        v-model="email"
        class="deepdivesummary-form__input"
        type="email"
        placeholder="you@email.com"
        label="Email"
        required
      />
      <Error v-if="error"> {{ error }} </Error>
      <div class="form-actions">
        <Button class="deepdivesummary-form__button" type="submit">
          Send Me a Copy
        </Button>
      </div>
    </form>
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
      email: email.value,
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
  max-width: 30rem;
  margin: 2rem 0;
}

.deepdive-select {
  padding: 0.5rem;
  display: grid;
  grid-template-columns: max-content 1fr auto;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
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
  border-bottom: 1px solid var(--gray-200);
}
.deepdive-item {
  border-top: 1px solid var(--gray-200);
}
.form-actions {
  display: flex;
  justify-content: flex-end;
  text-align: center;
  gap: 0.5rem;
}
</style>
