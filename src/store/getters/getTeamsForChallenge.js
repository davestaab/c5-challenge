const getTeamsForChallenge = ({ teamChallenges, teams }) => challengeId => {
  return teamChallenges.filter(t => t.challengeId === challengeId).map(tc => teams.find(t => t.id === tc.teamId));
};
export default getTeamsForChallenge;
