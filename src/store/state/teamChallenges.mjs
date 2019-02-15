import { FASTEST_ALL, FASTEST_CAT, ONE_SUCCESSFUL, SMALLEST_ALL, SMALLEST_CAT } from './submissionStars';

export default [
  factory(1, 1, []),
  factory(1, 2, []),
  factory(1, 3, []),
  factory(1, 4, []),
  factory(1, 5, [])
];

function factory(challengeId, teamId, submissionStars) {
  return { challengeId, teamId, submissionStars };
}
