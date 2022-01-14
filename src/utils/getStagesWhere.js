export const getStagesFromStopWhere = (stageKey, stageValue, stop) => {
  return stop.stop_content.stages.filter(
    (stage) => stage[stageKey] === stageValue
  );
};
export const getStagesFromTourWhere = (stageKey, stageValue, tour) =>
  tour.stops.flatMap((stop) =>
    getStagesFromStopWhere(stageKey, stageValue, stop)
  );
