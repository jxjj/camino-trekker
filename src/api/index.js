import mockTour from "./mockTour.json";
import mockListOfAllTours from "./mockListOfAllTours.json";

const mockResponse = (payload, ms = 300) =>
  new Promise((resolve) => setTimeout(() => resolve(payload), ms));

export default {
  tours: {
    retrieve: () => mockResponse(mockTour),
    list: () => mockResponse(mockListOfAllTours),
  },
};
