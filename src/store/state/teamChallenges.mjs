import {
  FASTEST_ALL,
  SMALLEST_ALL,
  THREE_SUCCESSFUL,
  TWO_SUCCESSFUL,
  TIE_BREAKER,
  SMALLEST_CAT_SYSTEM,
  SMALLEST_CAT_SCRIPT,
  FASTEST_CAT_SYSTEM,
  FASTEST_CAT_SCRIPT,
  SMALLEST_CAT_IL,
  FASTEST_CAT_IL
} from './submissionStars';

export default [
  factory(1, 1, [THREE_SUCCESSFUL, FASTEST_CAT_IL, FASTEST_ALL]), // Bits Pleaes
  factory(1, 2, [THREE_SUCCESSFUL]), // Gold Team
  factory(1, 3, [THREE_SUCCESSFUL, SMALLEST_CAT_IL, SMALLEST_CAT_SYSTEM, SMALLEST_ALL]), // Team 7
  factory(1, 4, [
    THREE_SUCCESSFUL,
    SMALLEST_CAT_SCRIPT,
    FASTEST_CAT_SYSTEM,
    FASTEST_CAT_SCRIPT,
    TIE_BREAKER
  ]), // The Steer
  factory(1, 5, [TWO_SUCCESSFUL]) // KnoxVillians
];

function factory(challengeId, teamId, submissionStars) {
  return { challengeId, teamId, submissionStars };
}
