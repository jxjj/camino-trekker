import LanguageSelect from "./LanguageSelect.vue";
import LocaleProvider from "../LocaleProvider.vue";

export default {
  title: "Camino/Stages/LanguageSelect",
  component: LanguageSelect,
};

const Template = (args) => ({
  components: { LanguageSelect, LocaleProvider },
  setup() {
    return { args };
  },
  template: `
    <LocaleProvider :locales="args.locales">
      <LanguageSelect />
    </LocaleProvider>
  `,
});

export const Default = Template.bind({});
Default.args = {
  locales: ["en", "es", "en-GB"],
};
