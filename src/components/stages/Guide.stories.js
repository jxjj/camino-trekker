import Guide from "./Guide.vue";
import LocaleProvider from "../LocaleProvider.vue";
import mockTour from "../../common/__mocks__/mockTour.json";

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

const getStagesWhere = (stageKey, stageValue) => (stop) =>
  stop.stop_content.stages.filter((stage) => stage[stageKey] === stageValue);
const getGuideStages = getStagesWhere("type", "guide");

const guideStage = getGuideStages(mockTour.stops[0])[0];

export const Default = Template.bind({});
Default.args = {
  locales: ["en"],
  stage: guideStage,
};
