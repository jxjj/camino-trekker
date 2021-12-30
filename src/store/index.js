import { createStore } from "vuex";
import { ToursService } from "../common/api.service.js";

const initialState = {
  tour: null,
  isLoading: true,
  errors: [],
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
};

const actions = {
  fetchTour({ commit }, tourId) {
    commit("fetchTourStarted");
    ToursService.get(tourId)
      .then((tour) => {
        commit("fetchTourSucceeded", tour);
      })
      .catch((err) => {
        console.error(err);
        commit("fetchTourFailed", err);
      });
  },
};

const store = createStore({
  state: () => initialState,
  mutations,
  actions,
});

export default store;
