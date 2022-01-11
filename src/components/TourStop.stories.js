import TourStop from "./TourStop.vue";
import mockTour from "../common/__mocks__/mockTour.json";

export default {
  title: "Camino/TourStop",
  component: TourStop,
};

const Template = (args) => ({
  components: { TourStop },
  setup() {
    return { args };
  },
  template: `
      <TourStop />
  `,
});

export const Default = Template.bind({});
Default.args = {
  stopIndex: 2,
  tour: mockTour,
};
