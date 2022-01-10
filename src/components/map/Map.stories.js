import Map from "./Map.vue";
import MapPolyline from "./MapPolyline.vue";
import mockTour from "../../common/__mocks__/mockTour.json";
import getFullTourRoute from "../../utils/getFullTourRoute.js";
import getBoundingBox from "../../utils/getBoundingBox.js";
import config from "../../config.js";

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
  accessToken: config.mapBox.accessToken,
};

const fullTourRoute = getFullTourRoute(mockTour);

export const FitBounds = (args) => ({
  components: { Map, MapPolyline },
  setup() {
    const mapPolyline = {
      positions: fullTourRoute,
      id: "tour",
    };

    return { args, mapPolyline };
  },
  template: `
    <Map v-bind="args">
      <MapPolyline v-bind="mapPolyline" />
    </Map>
  `,
});
FitBounds.args = {
  ...Default.args,
  bounds: getBoundingBox(fullTourRoute),
};
