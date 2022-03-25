// vite uses import.meta.env for env variables
// must be prefixed with VITE to be included in client side app build
const env = import.meta.env;

export default {
  apiBaseUrl: env.VITE_API_HOST,
  imageStorageBase: `${env.VITE_API_HOST}/storage`,
  baseDir: env.VITE_BASE_DIR,
  mapBox: {
    accessToken: env.VITE_MAPBOX_ACCESS_TOKEN,
  },
};
