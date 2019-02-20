import {
  CATEGORY_COMPILED,
  CATEGORY_SCRIPT,
  CATEGORY_INTERMEDIATE,
  LANGUAGE_CSHARP,
  LANGUAGE_JS,
  LANGUAGE_CPLUSPLUS,
  LANGUAGE_PYTHON, LANGUAGE_GO, LANGUAGE_SCALA, LANGUAGE_C
} from './enums';

export default [
  // challenge 1
  // team 1
  factory(1, CATEGORY_SCRIPT, LANGUAGE_JS, 1, 1, true),
  factory(2, CATEGORY_COMPILED, LANGUAGE_CPLUSPLUS, 1, 1, true),
  factory(3, CATEGORY_INTERMEDIATE, LANGUAGE_CSHARP, 1, 1, true),
  // team 2
  factory(4, CATEGORY_INTERMEDIATE, LANGUAGE_CSHARP, 2, 1, true),
  factory(5, CATEGORY_COMPILED, LANGUAGE_PYTHON, 2, 1, true),
  factory(6, CATEGORY_SCRIPT, LANGUAGE_CSHARP, 2, 1, true),
  // team 3
  factory(7, CATEGORY_SCRIPT, LANGUAGE_JS, 3, 1, true),
  factory(8, CATEGORY_COMPILED, LANGUAGE_GO, 3, 1, true),
  factory(9, CATEGORY_INTERMEDIATE, LANGUAGE_SCALA, 3, 1, true),
  // team 4
  factory(10, CATEGORY_INTERMEDIATE, LANGUAGE_CSHARP, 4, 1, true),
  factory(11, CATEGORY_COMPILED, LANGUAGE_C, 4, 1, true),
  factory(12, CATEGORY_SCRIPT, LANGUAGE_JS, 4, 1, true),
  // team 5
  factory(13, CATEGORY_INTERMEDIATE, LANGUAGE_CSHARP, 5, 1, true),
  factory(14, CATEGORY_COMPILED, LANGUAGE_CPLUSPLUS, 5, 1, true),
  factory(15, CATEGORY_SCRIPT, LANGUAGE_PYTHON, 5, 1, true)
];

function factory(id, cat, lang, teamId, challengeId, successful) {
  return {
    id,
    cat,
    lang,
    teamId,
    challengeId,
    successful
  };
}
