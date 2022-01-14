import ARTest from "./ARTest.vue";
// import mockTour from "../../common/__mocks__/mockTour.json";
// import { getStagesFromStopWhere } from "../../utils/getStagesWhere.js";

export default {
  title: "Camino/Stages/ARTest",
  component: ARTest,
};

const Template = (args) => ({
  components: { ARTest },
  setup() {
    return { args };
  },
  template: `
    <ARTest v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {};
