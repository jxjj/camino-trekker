import Guide from "./Guide.vue";
import LocaleProvider from "../LocaleProvider.vue";
import mockTour from "../../common/__mocks__/mockTour.json";
import getStagesFromTourWhere from "../../utils/getStagesFromTourWhere.js";

export default {
  title: "Camino/Stages/Guide",
  component: Guide,
};

const Template = (args) => ({
  components: { Guide, LocaleProvider },
  setup() {
    return { args };
  },
  template: `
    <LocaleProvider locales="args.locales">
      <Guide v-bind="args" />
    </LocaleProvider>
  `,
});
const guideStages = getStagesFromTourWhere("type", "guide", mockTour);

export const Default = Template.bind({});
Default.args = {
  locales: ["en"],
  stage: guideStages[0],
};
