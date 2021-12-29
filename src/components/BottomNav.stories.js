import BottomNav from "./BottomNav.vue";
import ProgressIndicator from "./ProgressIndicator.vue";
import mockTour from "../api/mockTour.json";

export default {
  title: "Camino/BottomNav",
  component: BottomNav,
};

const Template = (args) => ({
  components: { BottomNav, ProgressIndicator },
  setup() {
    return { args };
  },
  template: `<BottomNav v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  activeStopIndex: 0,
  stops: mockTour.stops,
};
