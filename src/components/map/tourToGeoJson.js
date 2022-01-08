import getStagesFromTourWhere from "../../utils/getStagesFromTourWhere.js";

const lngLatToArray = ({ lng, lat }) => [lng, lat];

export const routeToGeoJson = (route) => ({
  type: "Feature",
  properties: {},
  geometry: {
    type: "LineString",
    coordinates: route.map(lngLatToArray),
  },
});

export const lngLatToGeoJson = (lngLat) => ({
  type: "Feature",
  properties: {},
  geometry: {
    type: "Point",
    coordinates: lngLatToArray(lngLat),
  },
});

export const tourRoutesToGeoJson = (tour) => {
  const navStages = getStagesFromTourWhere("type", "navigation", tour);
  const allRoutes = navStages.map((stage) => stage.route);
  return {
    type: "FeatureCollection",
    features: allRoutes.map(routeToGeoJson),
  };
};

export const tourStopsToGeoJson = (tour) => {
  const navStages = getStagesFromTourWhere("type", "navigation", tour);
  const allTargetPoints = navStages.map((stage) => stage.targetPoint);
  const startPoint = tour.start_location;
  return {
    type: "FeatureCollection",
    features: [startPoint, ...allTargetPoints].map(lngLatToGeoJson),
  };
};
