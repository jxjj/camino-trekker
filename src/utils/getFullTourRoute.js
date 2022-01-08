/// <reference path="../types.js" />;

import getStagesFromTourWhere from "./getStagesFromTourWhere.js";

/**
 * gets all route points from a given tour
 * @param {Object} - tour object from api
 * @returns {LngLat[]} - array of route points from every
 * stage
 */
export default (tour) =>
  getStagesFromTourWhere("type", "navigation", tour).flatMap(
    (stage) => stage.route
  );
