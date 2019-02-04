export default [
  factory(1, 'Steve'),
  factory(2, 'Ken'),
  factory(3, 'Chris'),
  factory(4, 'Matt'),
  factory(5, 'Colin'),
  factory(6, 'Nevada')
];

function factory(id, name) {
  return { id, name };
}
