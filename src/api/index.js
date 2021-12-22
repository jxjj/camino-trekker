import mockTour from "./mockTour.json";
import mockListOfAllTours from "./mockListOfAllTours.json";

const mockResponse = (payload, ms = 300) =>
  new Promise((resolve, reject) => setTimeout(() => resolve(payload), ms));

export default {
  tours: {
    retrieve: (id) => mockResponse(mockTour),
    list: () => mockResponse(mockListOfAllTours),
  },
};
