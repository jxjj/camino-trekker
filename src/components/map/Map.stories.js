import Map from "./Map.vue";
import MapMarker from "./MapMarker.vue";
import MapPolyline from "./MapPolyline.vue";
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
    <Map v-bind="args"/>
  `,
});

const navStages = getStagesFromTourWhere("type", "navigation", mockTour);
const navStagesWithRoutes = navStages.filter((stage) => stage?.route.length);
const stage1 = navStagesWithRoutes[1];

export const Default = Template.bind({});
Default.args = {
  lng: stage1.targetPoint.lng,
  lat: stage1.targetPoint.lat,
  zoom: 15,
};

export const WithPolyline = (args) => ({
  components: { Map, MapPolyline },
  setup() {
    return { args };
  },
  template: `
    <Map v-bind="args.map">
      <MapPolyline v-bind="args.mapPolyline" />
    </Map>
  `,
});

WithPolyline.args = {
  map: { ...Default.args },
  mapPolyline: {
    pathOptions: { color: "blue" },
    positions: navStagesWithRoutes.flatMap((stage) => stage.route),
    id: "tourRoute",
  },
};

export const WithStops = (args) => ({
  components: { Map, MapMarker },
  setup() {
    return { args };
  },
  template: `
    <Map v-bind="args.map">
      <MapMarker v-for="marker in args.markers" v-bind="marker" />
    </Map>
  `,
});
WithStops.args = {
  map: { ...Default.args },
  markers: navStages
    .filter((stage) => stage.targetPoint)
    .map((pt, i) => ({ ...pt, label: `Stop ${i}` })),
};
