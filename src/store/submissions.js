import { CATEGORY_COMPILED, CATEGORY_SCRIPT, LANGUAGE_CSHARP, LANGUAGE_JS } from './enums';

export default [
  factory(1, CATEGORY_SCRIPT, LANGUAGE_JS, 2, true),
  factory(2, CATEGORY_COMPILED, LANGUAGE_CSHARP, 1, true)
];

function factory(id, cat, lang, teamID, successful) {
  return {
    id,
    cat,
    lang,
    teamID,
    successful
  };
}
