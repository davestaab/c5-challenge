export default [
  factory(
    1,
    'The Two Egg Problem',
    '2019-02-14',
    '2019-01-31',
    '2019-01-31'
  )
];

function factory(id, title, eventDate, announcementDate, teamSubmissionDate) {
  return { id, title, eventDate, announcementDate, teamSubmissionDate };
}
