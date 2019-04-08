export default [
  factory(1, 'The Two Egg Problem', '2019-02-14', '2019-01-31', '2019-01-31'),
  factory(2, 'Easter Bunny', '2019-04-22 12:00:00pm', '2019-04-08', '2019-04-12 11:59:59pm')
];

function factory(id, title, eventDate, announcementDate, teamSubmissionDate) {
  return { id, title, eventDate, announcementDate, teamSubmissionDate };
}
