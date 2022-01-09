import { ref } from "vue";
import TourProvider from "./TourProvider.vue";
import MapSheet from "./MapSheet.vue";
import Button from "./Button.vue";
import mockTour from "../common/__mocks__/mockTour.json";

export default {
  title: "Camino/MapSheet",
  component: MapSheet,
};

const Template = (args) => ({
  components: { MapSheet, Button, TourProvider },
  setup() {
    const isOpen = ref(true);
    const toggleSheet = () => {
      isOpen.value = !isOpen.value;
    };
    return {
      args,
      isOpen,
      toggleSheet,
      mockTour,
    };
  },
  template: `
    <div>
      <TourProvider :tour="mockTour" :stopIndex="3"
      <Button @click="toggleSheet">Toggle Sheet</Button>
      <MapSheet :isOpen="isOpen" @close="toggleSheet" v-bind="args"  />
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};
