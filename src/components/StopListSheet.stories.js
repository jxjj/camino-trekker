import StopListSheet from "./StopListSheet.vue";
import MockTour from "../common/__mocks__/mockTour.json";

export default {
  title: "Camino/StopListSheet",
  component: StopListSheet,
};

const Template = (args) => ({
  components: { StopListSheet },
  setup() {
    return { args };
  },
  template: `
    <StopListSheet v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  activeStopIndex: 0,
  stops: MockTour.stops,
};
