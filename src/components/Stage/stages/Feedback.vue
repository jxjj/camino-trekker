<template>
  <form class="feedback-stage" @submit.prevent="submitFeedback">
    <h3>Feedback</h3>
    <Input v-model="name" label="Name" type="text" required />
    <Input v-model="email" label="Email" type="email" required />
    <TextArea v-model="feedback" label="Comment" required />
    <Error v-if="error"> {{ error }} </Error>
    <div class="feedback-stage__actions">
      <Button variant="link" type="reset">Cancel</Button>
      <Button type="submit" iconPosition="end">Submit</Button>
    </div>
  </form>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";
import Input from "../../Input/Input.vue";
import TextArea from "../../TextArea/TextArea.vue";
import Button from "../../Button/Button.vue";
import Error from "../../Error/Error.vue";
import { useTour } from "../../../common/hooks";
import config from "../../../config";

const { tour } = useTour();
const name = ref("");
const email = ref("");
const feedback = ref("");
const isSubmitting = ref(false);
const isSuccessful = ref(false);
const error = ref("");

function submitFeedback() {
  isSubmitting.value = true;
  axios
    .post(`${config.apiBaseUrl}/feedback/${tour.value.id}`, {
      name: name.value,
      email: email.value,
      feedback: feedback.value,
    })
    .then((response) => {
      console.log({ response });
      isSubmitting.value = false;
      isSuccessful.value = true;
      email.value = "";
    })
    .catch((err) => {
      isSubmitting.value = false;
      isSuccessful.value = false;
      error.value = err.message;
    });
}
</script>
<style scoped>
.feedback-stage {
  max-width: 30rem;
}

.feedback-stage__actions {
  display: flex;
  justify-content: flex-end;
  text-align: center;
  gap: 0.5rem;
}
</style>
