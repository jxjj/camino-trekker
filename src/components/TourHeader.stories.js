import TourHeader from "./TourHeader.vue";
import mockTour from "../common/__mocks__/mockTour.json";

export default {
  title: "Camino/TourHeader",
  component: TourHeader,
  parameters: {
    backgrounds: {
      default: "light-blue",
      values: [{ name: "light-blue", value: "var(--blue-light)" }],
    },
  },
};

const Template = (args) => ({
  components: { TourHeader },
  setup() {
    return { args };
  },
  template: `<TourHeader v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  tour: mockTour,
};
