import TourHeader from "../TourHeader/TourHeader.vue";
import mockTour from "../../common/__mocks__/mockTour.json";

export default {
  title: "Camino/TourHeader",
  component: TourHeader,
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
