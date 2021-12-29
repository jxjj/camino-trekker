import MenuSheet from "./MenuSheet.vue";

export default {
  title: "Camino/MenuSheet",
  component: MenuSheet,
};

const Template = (args) => ({
  components: { MenuSheet },
  setup() {
    return { args };
  },
  template: `
    <MenuSheet v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
};
