import StopHeader from "./StopHeader.vue";
import mockTour from "../common/__mocks__/mockTour.json";

export default {
  title: "Camino/StopHeader",
  component: StopHeader,
};

const Template = (args) => ({
  components: { StopHeader },
  setup() {
    return { args };
  },
  template: `<StopHeader v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  stop: mockTour.stops[1],
  stopIndex: 1,
};
