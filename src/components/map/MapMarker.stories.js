import Map from "./Map.vue";
import MapMarker from "./MapMarker.vue";
import mockTour from "../../common/__mocks__/mockTour.json";
import getStagesFromTourWhere from "../../utils/getStagesFromTourWhere.js";
import { useMapBoxAccessToken } from "../../common/hooks";

export default {
  title: "Camino/Map/MapMarker",
  component: MapMarker,
};

const Template = (args) => ({
  components: { Map, MapMarker },
  setup() {
    return { args };
  },
  template: `
    <Map v-bind="args.map">
      <MapMarker v-bind="args.startMarker" />
      <MapMarker v-bind="args.targetMarker" />
    </Map>
  `,
});

const navStages = getStagesFromTourWhere("type", "navigation", mockTour);
const navStagesWithRoutes = navStages.filter((stage) => stage?.route.length);
const stage1 = navStagesWithRoutes[1];
const { accessToken } = useMapBoxAccessToken();

export const Default = Template.bind({});
Default.args = {
  map: {
    lng: mockTour.start_location.lng,
    lat: mockTour.start_location.lat,
    zoom: 15,
    accessToken: accessToken.value,
  },
  startMarker: {
    lng: mockTour.start_location.lng,
    lat: mockTour.start_location.lat,
  },
  targetMarker: {
    lng: stage1.targetPoint.lng,
    lat: stage1.targetPoint.lat,
    color: "red",
  },
};
