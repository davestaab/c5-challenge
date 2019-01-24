export default function getCurrentChallenge({ challenges }) {
  return challenges.reduce((result, c) => {
    return result === null ? c : c.eventDate > result.eventDate ? c : result;
  }, null);
}
