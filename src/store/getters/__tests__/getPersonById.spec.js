import getPersonById from '../getPersonById';

it('should get a person by Id', () => {
  const state = {
    people: [{ id: 1 }, { id: 2 }, { id: 3 }]
  };
  expect(getPersonById(state)(2)).toBe(state.people[1]);
});
