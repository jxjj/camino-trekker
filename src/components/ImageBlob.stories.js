import ImageBlob from "./ImageBlob.vue";

export default {
  title: "Camino/ImageBlob",
  component: ImageBlob,
  argTypes: {
    src: {
      type: "string",
    },
    alt: {
      type: "string",
    },
  },
};

const Template = (args) => ({
  components: { ImageBlob },
  setup() {
    return { args };
  },
  template: `<ImageBlob v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Minneapolis-MN-stone-arch-bridge.jpg/2560px-Minneapolis-MN-stone-arch-bridge.jpg",
  alt: "Stone Arch Bridge",
};
