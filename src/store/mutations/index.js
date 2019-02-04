export default {
  loadAllData(state, data) {
    state.challenges = data.challenges;
    state.people = data.people;
    state.submissions = data.submissions;
    state.teamChallenges = data.teamChallenges;
    state.teams = data.teams;
  }
};
