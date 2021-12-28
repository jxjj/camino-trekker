import BottomNav from "./BottomNav.vue";
import ProgressIndicator from "./ProgressIndicator.vue";

export default {
  title: "Camino/Components/BottomNav",
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
