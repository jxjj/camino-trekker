import Navigation from "./Navigation.vue";
import TourProvider from "../TourProvider.vue";
import mockTour from "../../common/__mocks__/mockTour.json";
import getStagesFromTourWhere from "../../utils/getStagesFromTourWhere.js";

export default {
  title: "Camino/Stages/Navigation",
  component: Navigation,
};

const Template = (args) => ({
  components: { Navigation, TourProvider },
  setup() {
    return { args, mockTour };
  },
  template: `
    <TourProvider :tour="mockTour" :stopIndex="args.stopIndex">
      <Navigation v-bind="args" />
    </TourProvider>
  `,
});

const navStages = getStagesFromTourWhere("type", "navigation", mockTour);

export const Default = Template.bind({});
Default.args = {
  stopIndex: 3,
  stage: navStages[3],
};
