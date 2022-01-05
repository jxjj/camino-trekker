import StopHeader from "./StopHeader.vue";
import mockTour from "../common/__mocks__/mockTour.json";

export default {
  title: "Camino/StopHeader",
  component: StopHeader,
  parameters: {
    backgrounds: {
      default: "light-blue",
      values: [{ name: "light-blue", value: "var(--blue-light)" }],
    },
  },
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
