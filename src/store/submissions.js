import { CATEGORY_COMPILED, CATEGORY_SCRIPT, LANGUAGE_CSHARP, LANGUAGE_JS } from './enums';

export default [
  // challenge 1
  factory(1, CATEGORY_SCRIPT, LANGUAGE_JS, 2, 1, true),
  factory(2, CATEGORY_COMPILED, LANGUAGE_CSHARP, 1, 1, true)
];

function factory(id, cat, lang, teamID, challengeId, successful) {
  return {
    id,
    cat,
    lang,
    teamID,
    challengeId,
    successful
  };
}
