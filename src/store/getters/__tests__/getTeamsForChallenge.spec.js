import getTeamsForChallenge from '../getTeamsForChallenge';
import { ONE_SUCCESSFUL, THREE_SUCCESSFUL } from '../../state/submissionStars';

it('should get teams for challenge', () => {
  const state = {
    teamChallenges: [
      {
        teamId: 1,
        challengeId: 1,
        submissionStars: [ONE_SUCCESSFUL]
      },
      {
        teamId: 3,
        challengeId: 1,
        submissionStars: [THREE_SUCCESSFUL]
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
        challengeId: 2
      },
      {
        id: 3,
        teamId: 3,
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
      id: 3,
      submissions: [
        {
          id: 3,
          teamId: 3,
          challengeId: 1
        }
      ],
      submissionStars: [THREE_SUCCESSFUL],
      starCount: 5,
      members: [3],
      people: [{ name: 'jane' }]
    },
    {
      id: 1,
      submissions: [
        {
          id: 1,
          teamId: 1,
          challengeId: 1
        }
      ],
      submissionStars: [ONE_SUCCESSFUL],
      starCount: 1,
      members: [1],
      people: [{ name: 'john' }]
    }
  ]);
});
