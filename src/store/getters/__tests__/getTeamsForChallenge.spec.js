import getTeamsForChallenge from '../getTeamsForChallenge';
import { ONE_SUCCESSFUL, SMALLEST_CAT } from '../../state/submissionStars';

it('should get teams for challenge', () => {
  const submissionStars = [ONE_SUCCESSFUL, SMALLEST_CAT];
  const state = {
    teamChallenges: [
      {
        teamId: 1,
        challengeId: 1,
        submissionStars
      },
      {
        teamId: 2,
        challengeId: 2
      },
      {
        teamId: 3,
        challengeId: 1,
        submissionStars
      }
    ],
    teams: [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      }
    ],
    submissions: [
      {
        id: 1,
        teamId: 1,
        challengeId: 1
      },
      {
        id: 2,
        teamId: 1,
        challengeId: 1
      },
      {
        id: 2,
        teamId: 1,
        challengeId: 2
      },
      {
        id: 2,
        teamId: 2,
        challengeId: 1
      }
    ]
  };
  expect(getTeamsForChallenge(state)(1)).toEqual([
    {
      id: 1,
      submissions: [
        {
          id: 1,
          teamId: 1,
          challengeId: 1
        },
        {
          id: 2,
          teamId: 1,
          challengeId: 1
        }
      ],
      submissionStars
    },
    {
      id: 3,
      submissions: [],
      submissionStars
    }
  ]);
});
