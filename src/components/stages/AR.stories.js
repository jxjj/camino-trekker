import AR from "./AR.vue";
import mockTour from "../../common/__mocks__/mockTour.json";
import getStagesFromTourWhere from "../../utils/getStagesFromTourWhere.js";

export default {
  title: "Camino/Stages/AR",
  component: AR,
};

const Template = (args) => ({
  components: { AR },
  setup() {
    return { args };
  },
  template: `
    <AR v-bind="args" />
  `,
});
const guideStages = getStagesFromTourWhere("type", "ar", mockTour);

export const Default = Template.bind({});
Default.args = {
  stage: guideStages[0],
  locale: "en",
};
