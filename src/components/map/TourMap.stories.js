import TourMap from "./TourMap.vue";
import mockTour from "../../common/__mocks__/mockTour.json";

export default {
  title: "Camino/Map/TourMap",
  component: TourMap,
};

const Template = (args) => ({
  components: { TourMap },
  setup() {
    return {
      args,
    };
  },
  template: `
    <TourMap v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  initialMapStyle: "light",
  activeStopIndex: 3,
  tour: mockTour,
};
