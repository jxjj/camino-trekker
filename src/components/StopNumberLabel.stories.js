import StopNumberLabel from "./StopNumberLabel.vue";

export default {
  title: "Camino/Components/StopNumberLabel",
  component: StopNumberLabel,
  argTypes: {
    slot: {
      type: "string",
    },
  },
};

const Template = (args) => ({
  components: { StopNumberLabel },
  setup() {
    return { args };
  },
  template: `<StopNumberLabel v-bind="args">{{ args.slot}}</StopNumberLabel>`,
});

export const Default = Template.bind({});
Default.args = {
  slot: "3",
};
