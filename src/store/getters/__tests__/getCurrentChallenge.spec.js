import getCurrentChallenge from '../getCurrentChallenge';

it('should return the most recent challenge', () => {
  const state = {
    challenges: [
      {
        eventDate: '2018-10-31'
      },
      {
        eventDate: '2019-03-15'
      },
      {
        eventDate: '2019-01-31'
      }
    ]
  };
  expect(getCurrentChallenge(state)).toBe(state.challenges[1]);
});
