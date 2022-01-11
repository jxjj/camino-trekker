import { ref, watch } from "vue";
import { toGeoJsonLineString } from "./toGeoJson";

function addDataLayer(mapRef, { id, positions, color }) {
  const map = mapRef.value;

  if (!map) return;

  if (!id) throw Error(`addDataLayer is missing id '${id}'`);
  if (!Array.isArray(positions))
    throw Error(`addDataLayer is missing positions '${positions}'`);

  // remove existing data layer and source if it exists
  if (map.getLayer(id)) map.removeLayer(id);
  if (map.getSource(id)) map.removeSource(id);

  mapRef.value
    .addSource(id, {
      type: "geojson",
      data: toGeoJsonLineString(positions),
    })
    .addLayer({
      id,
      source: id,
      type: "line",
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": color || "#0472f8",
        "line-width": 6,
      },
    });
}

export default (mapRef) => ({
  addPolyline: (props) =>
    watch(mapRef, () => {
      if (!mapRef.value) return;
      mapRef.value.on("load", () => addDataLayer(mapRef, props));
      // redraw if map style changes
      mapRef.value.on("style.load", () => addDataLayer(mapRef, props));
    }),
});
