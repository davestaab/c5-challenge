import { FASTEST_ALL, FASTEST_CAT, ONE_SUCCESSFUL, SMALLEST_ALL, SMALLEST_CAT } from './submissionStars';

export default [
  factory(1, 1, [ONE_SUCCESSFUL, SMALLEST_ALL, FASTEST_CAT, SMALLEST_CAT]),
  factory(1, 2, [ONE_SUCCESSFUL, FASTEST_CAT, SMALLEST_CAT, FASTEST_ALL])
];

function factory(challengeId, teamId, submissionStars) {
  return { challengeId, teamId, submissionStars };
}
