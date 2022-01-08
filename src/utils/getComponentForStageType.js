import * as Stage from "../components/stages/index.js";

const componentLookup = {
  language: Stage.LanguageSelect,
  guide: Stage.Guide,
  separator: Stage.Separator,
};

/**
 * returns a component give a given tour stage type
 * @param {string} stageType - the tour stage type, as returned by tour api
 * @returns {VueComponent} Vue component
 */
export default (stageType) => componentLookup[stageType];
