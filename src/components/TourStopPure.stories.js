import TourStopPure from "./TourStopPure.vue";
import mockTour from "../common/__mocks__/mockTour.json";

export default {
  title: "Camino/TourStop",
  component: TourStopPure,
};

const Template = ({ args }) => ({
  components: { TourStopPure },
  setup() {
    return { args };
  },
  template: `
    <TourStopPure v-bind="args />
  `,
});

export const Default = Template.bind({});
Default.args = {
  tour: mockTour,
  stopIndex: 2,
};
