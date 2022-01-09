import TourProvider from "../TourProvider.vue";
import TourMap from "./TourMap.vue";
import mockTour from "../../common/__mocks__/mockTour.json";

export default {
  title: "Camino/Map/TourMap",
  component: TourMap,
};

const Template = (args) => ({
  components: { TourMap, TourProvider },
  setup() {
    return {
      args,
      mockTour,
    };
  },
  template: `
    <TourProvider :tour="mockTour" :stopIndex="args.tourProvider.stopIndex">
      <TourMap v-bind="args" />
    </TourProvider>
  `,
});

export const Default = Template.bind({});
Default.args = {
  initialMapStyle: "light",
  tourProvider: {
    stopIndex: 3,
  },
};
