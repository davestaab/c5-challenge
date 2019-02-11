const getTeamsForChallenge = ({ teamChallenges, teams, submissions }) => challengeId => {
  return teamChallenges
    .filter(t => t.challengeId === challengeId)
    .map(tc => teams.find(t => t.id === tc.teamId))
    .map(t => {
      t.submissions = submissions.filter(s => s.teamId === t.id && s.challengeId === challengeId);
      t.submissionStars = teamChallenges.find(
        tc => tc.challengeId === challengeId && tc.teamId === t.id
      ).submissionStars;
      t.starCount = t.submissionStars.reduce((sum, s) => sum + s.stars, 0);
      return t;
    });
};
export default getTeamsForChallenge;
