import getTeamsForChallenge from '../getTeamsForChallenge';

it('should get teams for challenge', () => {
  const state = {
    teamChallenges: [
      {
        teamId: 1,
        challengeId: 1
      },
      {
        teamId: 2,
        challengeId: 2
      },
      {
        teamId: 3,
        challengeId: 1
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
    ]
  };
  expect(getTeamsForChallenge(state)(1)).toEqual([
    {
      id: 1
    },
    {
      id: 3
    }
  ]);
});
