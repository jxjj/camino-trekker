module.exports = {
  env: {
    browser: true,
    node: true,
    "vue/setup-compiler-macros": true,
    jest: true
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier", "plugin:storybook/recommended"],
  rules: {
    // override/add rules settings here, such as:
    "vue/no-unused-vars": "error",
    "vue/script-setup-uses-vars": "error",
    "vue/require-default-prop": "off",
    "vue/attribute-hyphenation": "off",
    "vue/v-on-event-hyphenation": "off",
    "vue/multi-word-component-names": "off"
  }
};