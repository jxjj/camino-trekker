import { PureTourStop } from "./PureTourStop.vue";
import mockTour from "../common/__mocks__/mockTour.json";

export default {
  title: "Camino/TourStop",
  component: PureTourStop,
};

const Template = ({ args }) => ({
  components: { PureTourStop },
  setup() {
    return { args };
  },
  template: `
    <PureTourStop v-bind="args />
  `,
});

export const Default = Template.bind({});
Default.args = {
  tour: mockTour,
  stopIndex: 2,
};
