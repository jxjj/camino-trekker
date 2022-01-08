import Map from "./Map.vue";
import mockTour from "../../common/__mocks__/mockTour.json";
import getStagesFromTourWhere from "../../utils/getStagesFromTourWhere.js";

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

const navStages = getStagesFromTourWhere("type", "navigation", mockTour);
const navStagesWithRoutes = navStages.filter((stage) => stage?.route.length);
const stage = navStagesWithRoutes[1];

export const Default = Template.bind({});
Default.args = {
  lng: stage.targetPoint.lng,
  lat: stage.targetPoint.lat,
  zoom: 15,
  route: stage.route,
};
