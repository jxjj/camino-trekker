import { ref, computed, reactive } from "vue";
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

function getCenterOfBoundingBox([[minLng, minLat], [maxLng, maxLat]]) {
  return {
    lng: (minLng + maxLng) / 2,
    lat: (minLat + maxLat) / 2,
  };
}

const createStopLabel = (locale) => (stop, index) => {
  console.log(stop.stop_content.title);
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
  const mapStyleChoices = ["dark", "satellite", "streets", "light"].sort();
  const mapStyle = ref(initialMapStyle);
  const fullTourRouteRef = computed(() => getFullTourRoute(tour.value));
  const allStopRoutes = computed(() => getAllRoutes(tour.value));
  const allStopPoints = computed(() => getAllStopPoints(tour.value));
  const startPoint = computed(() => tour.value.start_location);

  let bounds;
  let center;
  let zoom;
  if (type === "tour") {
    bounds = getBoundingBox(fullTourRouteRef.value);
    center = startPoint;
    zoom = 10;
  }
  if (type === "stop") {
    const stopPoints = getPointsForStop(
      stopIndex.value,
      allStopPoints.value,
      allStopRoutes.value
    );
    bounds = getBoundingBox(stopPoints);
    center = getCenterOfBoundingBox(bounds);
    zoom = 14;
  }

  const tourMap = reactive({
    mapStyleChoices,
    mapStyle,
    setMapStyle(updatedStyle) {
      mapStyle.value = updatedStyle;
    },
    currentStopIndex: stopIndex,
    // for polylines
    stopRoutes: allStopRoutes,
    // for map markers
    stopPoints: allStopPoints,
    // for map popups
    stopLabels: createAllStopLabels({
      tour: tour.value,
      locale: locale.value,
    }),
    center,
    bounds,
    accessToken,
    zoom,
    getStopColor(index) {
      if (index < stopIndex.value) return "#7EEAFC";
      if (index === stopIndex.value) return "#0A84FF";
      return "#999";
    },
  });

  return tourMap;
};
