import { computed } from "vue";
import { useStore } from "vuex";
import getFullTourRoute from "../utils/getFullTourRoute.js";
import config from "../config.js";

const store = useStore();

export const useTour = () => ({
  tour: computed(() => store.state.tour),
});

export const useStopIndex = () => ({
  stopIndex: computed(() => store.getters.stopIndex),
});

export const useLocale = () => ({
  locale: computed(() => store.state.locale),
  setLocale: (newLocale) => store.dispatch("setLocale", newLocale),
});

export const useMapBoxAccessToken = () => ({
  accessToken: computed(() => config.mapBox.accessToken),
});

export const useFullTourRoute = () =>
  computed(() => {
    const { tour } = useTour();
    return {
      fullTourRoute: getFullTourRoute(tour.value),
    };
  });

export const useTourLocales = () => {
  const { tour } = useTour();
  return {
    tourLocales: computed(() => tour.value.tour_content.languages),
  };
};
