import { ref, computed, reactive, watch, unref } from "vue";
import {
  useTour,
  useStopIndex,
  useLocale,
  useMapBoxAccessToken,
} from "../../common/hooks.js";
import getFullTourRoute from "../../utils/getFullTourRoute.js";
import getAllStopPoints from "../../utils/getAllStopPoints.js";
import getBoundingBox from "../../utils/getBoundingBox";
import getAllRoutes from "../../utils/getAllRoutes";

/**
 * list of LngLat stop points for a given stop index
 * includes:
 *  - previous stop target (if there is one)
 *  - stop target at given stop index
 *  - all route points at given stop index
 * @param {} index
 * @param {*} allStopPoints - collection of LngLat points
 * @param {*} allStopRoutes - collection of routes (each a collection of LngLat points) for a given stop
 * @returns list of LngLat points
 */
function getPointsForStop(index = 0, allStopPoints, allStopRoutes) {
  const prevStopTarget = index > 0 ? allStopPoints[index - 1] : null;
  const currentStopRoute = allStopRoutes[index];
  const currentStopTarget = allStopPoints[index];

  // the list of points we want to create a bounding box around.
  return [prevStopTarget, ...currentStopRoute, currentStopTarget].filter(
    Boolean
  ); // remove any null values
}

function getCenterOfBoundingBox(bounds) {
  const [[minLng, minLat], [maxLng, maxLat]] = bounds;
  return {
    lng: (minLng + maxLng) / 2,
    lat: (minLat + maxLat) / 2,
  };
}

const createStopLabel = (locale) => (stop, index) => {
  return {
    title: stop.stop_content.title[locale],
    href: `/tours/${stop.tour_id}/stops/${index}`,
    number: index + 1,
  };
};

function createAllStopLabels({ tour, locale }) {
  return tour.stops.map(createStopLabel(locale));
}

export default ({ initialMapStyle, type = "tour" }) => {
  const { tour } = useTour();
  const { stopIndex } = useStopIndex();
  const { locale } = useLocale();
  const { accessToken } = useMapBoxAccessToken();

  // data
  const mapStyleChoices = reactive(
    ["dark", "satellite", "streets", "light"].sort()
  );
  const mapStyle = ref(initialMapStyle);
  const fullTourRouteRef = computed(() => getFullTourRoute(tour.value));
  const allStopRoutes = computed(() => getAllRoutes(tour.value));
  const allStopPoints = computed(() => getAllStopPoints(tour.value));
  const startPoint = computed(() => tour.value.start_location);

  const bounds = ref(null);
  const center = ref(null);
  const zoom = ref(10);
  if (type === "tour") {
    bounds.value = getBoundingBox(fullTourRouteRef.value);
    center.value = startPoint;
  }
  if (type === "stop") {
    const stopPoints = getPointsForStop(
      stopIndex.value,
      allStopPoints.value,
      allStopRoutes.value
    );
    bounds.value = getBoundingBox(stopPoints);
    center.value = getCenterOfBoundingBox(bounds.value);
    zoom.value = 14;
  }

  const tourMap = {
    mapStyleChoices,
    mapStyle,
    setMapStyle(updatedStyle) {
      mapStyle.value = updatedStyle;
    },
    currentStopIndex: stopIndex,
    stopRoutes: allStopRoutes, // for polylines
    stopPoints: allStopPoints, // for map markers
    stopLabels: createAllStopLabels({
      tour: tour.value,
      locale: locale.value,
    }), // for map popups
    center,
    bounds,
    accessToken,
    zoom,
    getStopColor(index) {
      if (index < stopIndex.value) return "#7EEAFC";
      if (index === stopIndex.value) return "#0A84FF";
      return "#999";
    },
  };

  // update bounds when stop changes
  watch(stopIndex, () => {
    tourMap.bounds = getBoundingBox(allStopPoints.value);
    tourMap.center = getCenterOfBoundingBox(bounds.value);
    tourMap.zoom = 14;
  });

  return tourMap;
};
