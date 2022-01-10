import { ref, watch, onMounted, onUnmounted } from "vue";
import "mapbox-gl/dist/mapbox-gl.css";
import {
  Map,
  FullscreenControl,
  GeolocateControl,
  ScaleControl,
} from "mapbox-gl";

const MAP_STYLES = {
  streets: "mapbox://styles/mapbox/streets-v11",
  outdoors: "mapbox://styles/mapbox/outdoors-v11",
  light: "mapbox://styles/mapbox/light-v10",
  dark: "mapbox://styles/mapbox/dark-v10",
  satellite: "mapbox://styles/mapbox/satellite-v9",
  "satellite-streets": "mapbox://styles/mapbox/satellite-streets-v11",
  "navigation-day": "mapbox://styles/mapbox/navigation-day-v1",
  "navigation-night": "mapbox://styles/mapbox/navigation-night-v1",
};

function setupMap(mapContainerRef, mapRef, props) {
  mapRef.value = new Map({
    container: mapContainerRef.value,
    style: MAP_STYLES[props.mapStyle],
    center: [props.lng, props.lat],
    zoom: props.zoom,
    accessToken: props.accessToken,
  });

  mapRef.value
    .addControl(new FullscreenControl())
    .addControl(new GeolocateControl())
    .addControl(new ScaleControl({ unit: "imperial" }));

  if (props.bounds) {
    mapRef.value.fitBounds(props.bounds, {
      padding: 64,
    });
  }
}

/**
 * given a ref to a map container and initial props, returns a map object
 * @param {VueRef} mapContainerRef - Reference to map container element
 * @param {Object} props - initial map props
 */
export default function useMap(mapContainerRef, props) {
  const mapRef = ref(null);
  watch(
    () => props.mapStyle,
    () => {
      mapRef.value.setStyle(MAP_STYLES[props.mapStyle]);
    }
  );

  onMounted(() => {
    setupMap(mapContainerRef, mapRef, props);
  });

  onUnmounted(() => {
    // probably need to do some cleanup here?
  });

  return { map: mapRef };
}
