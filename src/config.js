// vite uses import.meta.env while storybook uses process.env

export default {
  mapBox: {
    // accessToken: process.env.MAPBOX_ACCESS_TOKEN,
    accessToken: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN,
  },
};
