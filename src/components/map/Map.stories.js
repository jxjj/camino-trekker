import Map from "./Map.vue";
import mockTour from "../../common/__mocks__/mockTour.json";
import getFullTourRoute from "../../utils/getFullTourRoute";
import getBoundingBoxFromRoute from "../../utils/getBoundingBoxFromRoute";

export default {
  title: "Camino/Map/Map",
  component: Map,
};

const Template = (args) => ({
  components: { Map },
  setup() {
    return { args };
  },
  template: `
    <Map v-bind="args"/>
  `,
});

export const Default = Template.bind({});
Default.args = {
  lng: mockTour.start_location.lng,
  lat: mockTour.start_location.lat,
  zoom: 15,
};

const fullTourRoute = getFullTourRoute(mockTour);

export const FitBounds = Template.bind({});
FitBounds.args = {
  ...Default.args,
  // bounds: getBoundingBoxFromRoute(fullTourRoute),
};
