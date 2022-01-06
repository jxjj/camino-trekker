import * as Stage from "../components/stages/index.js";

const componentLookup = {
  language: Stage.LanguageSelect,
  guide: Stage.Guide,
  separator: Stage.Separator,
};

export default (stageType) => componentLookup[stageType];
