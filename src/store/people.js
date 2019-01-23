export default [
  factory(1, 'Steve'),
  factory(2, 'Ken'),
  factory(3, 'Chris'),
  factory(4, 'Matt'),
  factory(5, 'Colin'),
  factory(6, 'Nevada')
];

const factory = (id, name) => ({ id, name });
