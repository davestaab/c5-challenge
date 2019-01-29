export default [
  factory(
    1,
    'Compelling challenge',
    `given the ability to type, write some code`,
    '2019-02-15',
    '2019-01-31',
    '2019-01-31'
  )
];

function factory(id, title, description, eventDate, announcementDate, teamSubmissionDate) {
  return { id, title, description, eventDate, announcementDate, teamSubmissionDate };
}
