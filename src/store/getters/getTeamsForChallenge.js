const getTeamsForChallenge = ({ teamChallenges, teams, submissions, people }) => challengeId => {
  return teamChallenges
    .filter(tc => tc.challengeId === challengeId)
    .map(tc => teams.find(t => t.id === tc.teamId))
    .map(t => {
      t.submissions = submissions.filter(s => s.teamId === t.id && s.challengeId === challengeId);
      t.submissionStars = teamChallenges.find(
        tc => tc.challengeId === challengeId && tc.teamId === t.id
      ).submissionStars;
      t.starCount = t.submissionStars.reduce((sum, s) => sum + s.stars, 0);
      t.people = t.members.map(m => people[m - 1]);
      return t;
    })
    .sort((a, b) => b.starCount - a.starCount);
};
export default getTeamsForChallenge;
