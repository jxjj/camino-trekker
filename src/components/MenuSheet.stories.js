import MenuSheet from "./MenuSheet.vue";

export default {
  title: "Camino/Components/MenuSheet",
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
  items: [
    {
      icon: "home",
      text: "Home",
      href: "#!",
    },
    {
      icon: "map",
      text: "Map",
      href: "#!",
    },
    {
      icon: "settings",
      text: "Settings",
      href: "#!",
    },
    {
      icon: "help_outline",
      text: "Help",
      href: "#!",
    },
  ],
  activeIndex: 3,
};
