// vite uses import.meta.env for env variables
// must be prefixed with VITE to be included in client side app build
const { VITE_MAPBOX_ACCESS_TOKEN, VITE_IMAGE_STORAGE_BASE } = import.meta.env;

export default {
  imageStorageBase: VITE_IMAGE_STORAGE_BASE,
  mapBox: {
    accessToken: VITE_MAPBOX_ACCESS_TOKEN,
  },
};
