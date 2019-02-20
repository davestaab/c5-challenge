import { FASTEST_ALL, THREE_SUCCESSFUL } from '../../../src/store/state/submissionStars.mjs';

export default {
  json() {
    return {
      challenges: [
        {
          id: 2,
          title: 'Compelling challenge',
          description: 'given the ability to type, write some code',
          eventDate: '2019-03-11',
          announcementDate: '2019-01-20T12:00:00',
          teamSubmissionDate: '2019-01-20T12:00:00'
        }
      ],
      people: [{ id: 1, name: 'john' }, { id: 1, name: 'jane' }],
      submissions: [
        {
          id: 1,
          cat: 'CATEGORY_SCRIPT',
          lang: 'LANGUAGE_JS',
          teamId: 1,
          challengeId: 2,
          successful: true
        }
      ],
      teams: [
        {
          id: 1,
          name: 'alpha team',
          members: [1, 2]
        }
      ],
      teamChallenges: [
        {
          challengeId: 2,
          teamId: 1,
          submissionStars: [FASTEST_ALL, THREE_SUCCESSFUL]
        }
      ]
    };
  },
  ok: true
};
