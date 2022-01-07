import Map from "./Map.vue";

export default {
  title: "Camino/Map",
  component: Map,
};

const Template = (args) => ({
  components: { Map },
  setup() {
    return { args };
  },
  template: `
    <Map v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {};
