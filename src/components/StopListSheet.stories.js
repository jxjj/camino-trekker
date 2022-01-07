import StopListSheet from "./StopListSheet.vue";
import Button from "./Button.vue";
import MockTour from "../common/__mocks__/mockTour.json";
import { ref } from "vue";

export default {
  title: "Camino/StopListSheet",
  component: StopListSheet,
};

const Template = (args) => ({
  components: { StopListSheet, Button },
  setup() {
    const isOpen = ref("true");
    const toggleSheet = () => (isOpen.value = !isOpen.value);
    return { args, isOpen, toggleSheet };
  },
  template: `
  <div>
    <Button @click="toggleSheet">Toggle Sheet</Button>
    <StopListSheet v-bind="args" @close="toggleSheet" :isOpen="isOpen" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  activeStopIndex: 0,
  stops: MockTour.stops,
};
