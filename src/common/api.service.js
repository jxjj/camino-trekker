import pipe from "../utils/pipe";
import mockTour from "./__mocks__/mockTour.json";
import mockListOfAllTours from "./__mocks__/mockListOfAllTours.json";

const mockResponse = (payload, middlewares) =>
  new Promise((resolve) =>
    setTimeout(() => {
      pipe(...middlewares, resolve)(payload);
    }, 300)
  );

const middlewares = [];
export const toursService = {
  get(tourId) {
    return mockResponse(
      {
        ...mockTour,
        id: tourId,
      },
      middlewares
    );
  },
  list() {
    return mockResponse(mockListOfAllTours);
  },
  use(middleware) {
    middlewares.push(middleware);
  },
};

// change any api locale keys from "English" to "en"
const localeEnglishToEn = (json) => {
  const newJSON = JSON.stringify(json).replace('"English":', '"en":');
  return JSON.parse(newJSON);
};

toursService.use(localeEnglishToEn);
