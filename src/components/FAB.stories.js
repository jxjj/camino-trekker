import FAB from "./FAB.vue";

export default {
  title: "Camino/Components/FAB",
  component: FAB,
  argTypes: {
    icon: {
      type: "string",
    },
    alt: {
      type: "string",
    },
  },
};

const Template = (args) => ({
  components: { FAB },
  setup() {
    return { args };
  },
  template: `<FAB v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  icon: "arrow_forward",
  alt: "Next",
};
