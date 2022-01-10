import { createStore, createLogger } from "vuex";
import { toursService } from "../common/api.service.js";

const toInt = (str) => Number.parseInt(str, 10);

// const normalizeStop =
//   (locale = "en") =>
//   (stop, index) => ({
//     ...stop,
//     id: stop.id,
//     tourId: stop.tour_id,
//     number: index + 1,
//     title: stop.stop_content.title[locale],
//     image: {
//       ...stop.image,
//       alt: stop.stop_content.image.alt[locale],
//     },
//     stages: stop.stop_content.stages,
//   });

const initialState = {
  tour: null,
  isLoading: true,
  locale: "en",
  errors: [],
};

const getters = {
  allStops(state) {
    const { tour } = state;
    if (!tour) return [];
    return tour.stops;
  },
  totalStops(state) {
    if (!state.tour) return 0;
    return state.tour.stops.length;
  },
  stopIndex(state) {
    return toInt(state.route.params.stopIndex || 0);
  },
  tourId(state) {
    return toInt(state.route.params.tourId);
  },
  isFirstStop(_, getters) {
    return getters.stopIndex === 0;
  },
  isLastStop(_, getters) {
    return getters.stopIndex === getters.totalStops - 1;
  },
  currentStop(_, getters) {
    return getters.allStops?.[getters.stopIndex] || null;
  },
  nextStop(state, getters) {
    if (getters.isLastStop) return null;
    return state.getters.allStops[getters.stopIndex + 1];
  },
  previousStop(state, getters) {
    if (getters.isFirstStop) return null;
    return state.getters.allStops[getters.stopIndex - 1];
  },
};

const mutations = {
  fetchTourStarted(state) {
    state.isLoading = true;
  },
  fetchTourSucceeded(state, tour) {
    state.isLoading = false;
    state.tour = tour;
  },
  fetchTourFailed(state, error) {
    state.isLoading = false;
    state.errors.push(error);
  },
  setLocale(state, locale) {
    state.locale = locale;
  },
};

const actions = {
  fetchTour({ commit }, tourId) {
    commit("fetchTourStarted");
    toursService
      .get(tourId)
      .then((tour) => {
        commit("fetchTourSucceeded", tour);
      })
      .catch((err) => {
        console.error(err);
        commit("fetchTourFailed", err);
      });
  },
  setLocale({ commit }, locale) {
    commit("setLocale", locale);
  },
};

const store = createStore({
  state: () => initialState,
  getters,
  mutations,
  actions,
  plugins: [createLogger()],
});

export default store;
