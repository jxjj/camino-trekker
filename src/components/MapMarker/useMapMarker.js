import { watch, ref } from "vue";
import { Marker } from "mapbox-gl";

export default (mapRef, { lng, lat, color }) => {
  const marker = ref(null);
  watch(mapRef, () => {
    const map = mapRef.value;
    if (!map) return;
    map.on("load", () => {
      marker.value = new Marker({ color }).setLngLat([lng, lat]).addTo(map);
    });
  });

  return { marker };
};
