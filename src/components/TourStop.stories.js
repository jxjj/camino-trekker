import TourStop from "./TourStop.vue";
import TourProvider from "./TourProvider.vue";
import mockTour from "../common/__mocks__/mockTour.json";

export default {
  title: "Camino/TourStop",
  component: TourStop,
};

const Template = (args) => ({
  components: { TourStop, TourProvider },
  setup() {
    return { args };
  },
  template: `
    <TourProvider  v-bind="args">
      <TourStop />
    </TourProvider>
  `,
});

export const Default = Template.bind({});
Default.args = {
  stopIndex: 2,
  tour: mockTour,
};
