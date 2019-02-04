import isCurrentChallengeAnnounced from '../isCurrentChallengeAnnounced';
import MockDate from 'mockdate';

afterEach(MockDate.reset);

it('should return true when current time passes announcement time', () => {
  MockDate.set(new Date(2019, 0, 31, 0, 0, 0));
  expect(isCurrentChallengeAnnounced({}, { getCurrentChallenge: { announcementDate: '2019-01-31' } })).toBe(false);

  MockDate.set(new Date(2019, 0, 31, 0, 0, 1));
  expect(isCurrentChallengeAnnounced({}, { getCurrentChallenge: { announcementDate: '2019-01-31' } })).toBe(true);

  MockDate.set(new Date(2019, 0, 31, 1, 0, 12));
  expect(isCurrentChallengeAnnounced({}, { getCurrentChallenge: { announcementDate: '2019-01-31T01:00:12' } })).toBe(
    false
  );

  MockDate.set(new Date(2019, 0, 31, 1, 0, 13));
  expect(isCurrentChallengeAnnounced({}, { getCurrentChallenge: { announcementDate: '2019-01-31T01:00:12' } })).toBe(
    true
  );
});
