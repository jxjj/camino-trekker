const vue = require("@vitejs/plugin-vue");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-vite"
  },

  async viteFinal(config, {
    configType
  }) {
    const customVueConfig = {
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.includes("-")
        }
      }
    }; // replace default vue plugin using one using custom config

    config.plugins = config.plugins.map(plugin => plugin.name === "vite:vue" ? vue(customVueConfig) : plugin); // return the customized config

    return config;
  }

};