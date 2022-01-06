import Navigation from "./Navigation.vue";
import mockTour from "../../common/__mocks__/mockTour.json";
import getStagesFromTourWhere from "../../utils/getStagesFromTourWhere.js";

export default {
  title: "Camino/Stages/Navigation",
  component: Navigation,
};

const Template = (args) => ({
  components: { Navigation },
  setup() {
    return { args };
  },
  template: `
    <Navigation v-bind="args" />
  `,
});

const navStages = getStagesFromTourWhere("type", "navigation", mockTour);

export const Default = Template.bind({});
Default.args = {
  locales: ["en"],
  stage: navStages[0],
};
