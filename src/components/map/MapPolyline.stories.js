import Map from "./Map.vue";
import MapPolyline from "./MapPolyline.vue";
import mockTour from "../../common/__mocks__/mockTour.json";
import getRouteByIndex from "../../utils/getRouteByIndex.js";
import getFullTourRoute from "../../utils/getFullTourRoute.js";

export default {
  title: "Camino/Map/MapPolyline",
  component: MapPolyline,
};

const Template = (args) => ({
  components: { Map, MapPolyline },
  setup() {
    return { args };
  },
  template: `
    <Map v-bind="args.map">
      <MapPolyline v-bind="args.fullTourRoute" />
      <MapPolyline v-bind="args.route1" />
      <MapPolyline v-bind="args.route2" />
      <MapPolyline v-bind="args.route3" />
    </Map>
  `,
});

export const Default = Template.bind({});
Default.args = {
  map: {
    lng: mockTour.start_location.lng,
    lat: mockTour.start_location.lat,
    zoom: 15,
  },
  fullTourRoute: {
    positions: getFullTourRoute(mockTour),
    id: "fullTourRoute",
  },
  route1: {
    positions: getRouteByIndex(mockTour, 1),
    id: "route-1",
    color: "#31d158",
  },
  route2: {
    positions: getRouteByIndex(mockTour, 2),
    id: "route-2",
    color: "#fed709",
  },
  route3: {
    positions: getRouteByIndex(3),
    id: "route-3",
    color: "#ff453a",
  },
};
