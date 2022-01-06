export default (stageKey, stageValue, tour) =>
  tour.stops.flatMap((stop) =>
    stop.stop_content.stages.filter((stage) => stage[stageKey] === stageValue)
  );
