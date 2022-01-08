import Map from "./Map.vue";
import MapMarker from "./MapMarker.vue";
import MapPopup from "./MapPopup.vue";
import mockTour from "../../common/__mocks__/mockTour.json";

export default {
  title: "Camino/Map/MapPopup",
  component: MapPopup,
};

const Template = (args) => ({
  components: { Map, MapMarker, MapPopup },
  setup() {
    const startPosition = mockTour.start_location;
    return { args, startPosition };
  },
  template: `
    <Map v-bind="startPosition" :zoom="15">
      <MapMarker v-bind="startPosition" color="red">
        <MapPopup v-bind="args">
          <h2>Starting Location</h2>
        </MapPopup>
      </MapMarker>
    </Map>
  `,
});

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
};
