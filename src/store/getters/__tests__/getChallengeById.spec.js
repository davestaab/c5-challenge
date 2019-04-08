import getChallengeById from '../getChallengeById';

it('should return a challenge by id', () => {
  const state = {
    challenges: [
      {
        id: 1
      },
      {
        id: 2
      }
    ]
  };
  const getter = getChallengeById(state);
  expect(getter(2)).toBe(state.challenges[1]);
  expect(getter(1)).toBe(state.challenges[0]);
});
