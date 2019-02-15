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
        id: 1,
        members: [1]
      },
      {
        id: 2,
        members: [2]
      },
      {
        id: 3,
        members: [3]
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
    ],
    people: [
      {
        name: 'john'
      },
      {},
      {
        name: 'jane'
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
      submissionStars,
      members: [1],
      people: [{ name: 'john' }]
    },
    {
      id: 3,
      submissions: [],
      submissionStars,
      members: [3],
      people: [{ name: 'jane' }]
    }
  ]);
});
