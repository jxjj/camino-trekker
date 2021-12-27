import ProgressIndicator from "./ProgressIndicator.vue";

export default {
  title: "Camino/Components/ProgressIndicator",
  component: ProgressIndicator,
};

const Template = (args) => ({
  components: { ProgressIndicator },
  setup() {
    return { args };
  },
  template: `<ProgressIndicator v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  active: 3,
  total: 10,
};
