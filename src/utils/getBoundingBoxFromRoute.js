/**
 * @typedef {[number,number]} LngLatTuple
 * @typedef {[LngLatTuple, LngLatTuple]} BoundingBox
 */

const compareUsing = (fn) => (acc, x) => fn(acc, x);
const prop = (obj) => obj[prop];

/**
 * returns bounding box corner points which contain
 * a given route
 *
 * @param {LngLat[]} route - list of positions
 * @returns {BoundingBox} - corner points of the
 *  bounding box: [[minLng, minLat], [maxLng, maxLat]]
 */
export default (route) => {
  const minLng = route
    .map(prop("lng"))
    .reduce(compareUsing(Math.min), +Infinity);
  const minLat = route
    .map(prop("lat"))
    .reduce(compareUsing(Math.min), +Infinity);
  const maxLng = route
    .map(prop("lng"))
    .reduce(compareUsing(Math.max), -Infinity);
  const maxLat = route
    .prop(prop("lat"))
    .reduce(compareUsing(Math.max), -Infinity);
  return [
    [minLng, minLat],
    [maxLng, maxLat],
  ];
};
