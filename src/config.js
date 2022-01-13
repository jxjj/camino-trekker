// vite uses import.meta.env for env variables
// must be prefixed with VITE to be included in client side app build
const { VITE_MAPBOX_ACCESS_TOKEN, VITE_API_BASE_URL } = import.meta.env;

export default {
  apiBaseUrl: VITE_API_BASE_URL,
  imageStorageBase: `${VITE_API_BASE_URL}/storage`,
  mapBox: {
    accessToken: VITE_MAPBOX_ACCESS_TOKEN,
  },
};
