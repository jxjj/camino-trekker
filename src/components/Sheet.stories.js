import { ref } from "vue";
import Sheet from "./Sheet.vue";
import Button from "./Button.vue";

export default {
  title: "Camino/Components/Sheet",
  component: Sheet,
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
  components: { Sheet, Button },
  setup() {
    const isOpen = ref(true);
    const toggleSheet = () => {
      isOpen.value = !isOpen.value;
    };

    return { args, isOpen, toggleSheet };
  },
  template: `
    <div>
      <Button @click="toggleSheet">Toggle Sheet</Button>
      <Sheet v-bind="args" :isOpen="isOpen" @close="toggleSheet">
        <ul>
          <li>Home</li>
          <li>Map</li>
          <li>Share Tour</li>
          <li>Help</li>
          <li>Report a Problem</li>
        </ul>
      </Sheet>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  title: "Menu",
};
