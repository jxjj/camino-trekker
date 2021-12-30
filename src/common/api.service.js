import mockTour from "./__mocks__/mockTour.json";
import mockListOfAllTours from "./__mocks__/mockListOfAllTours.json";

const mockResponse = (payload, ms = 300) =>
  new Promise((resolve) => setTimeout(() => resolve(payload), ms));

export const ToursService = {
  get(tourId) {
    return mockResponse({
      ...mockTour,
      id: tourId,
    });
  },
  list() {
    return mockResponse(mockListOfAllTours);
  },
};
