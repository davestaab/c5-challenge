export default [
  factory(
    1,
    'Egg Drop',
    `given 2 eggs, determine what floor of a building the eggs can be dropped from without breaking`,
    '2019-03-15'
  )
];

function factory(id, title, description, eventDate, submissions) {
  return { id, title, description, eventDate, submissions };
}
