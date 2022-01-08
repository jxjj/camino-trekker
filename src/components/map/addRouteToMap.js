import { routeToGeoJson } from "./tourToGeoJson.js";

export default function addRouteToMap({ route, map, id }) {
  if (!map) {
    throw Error("cannot add route to map: map does not exist");
  }
  console.log({ route });

  const data = routeToGeoJson(route);
  console.log({ data });

  map.addSource(id, {
    type: "geojson",
    data,
  });

  map.addLayer({
    id,
    type: "line",
    source: id,
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#888",
      "line-width": 8,
    },
  });
}
