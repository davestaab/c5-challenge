export default [
  factory(1, 'Sara'),
  factory(2, 'Marshall'),
  factory(3, 'Jocelyn'),

  factory(4, 'Jill'),
  factory(5, 'Dakota'),
  factory(6, 'Gabriel'),

  factory(7, 'Aaron'),
  factory(8, 'Mark'),
  factory(9, 'Dave'),

  factory(10, 'Thad'),

  factory(11, 'Caleb'),
  factory(12, 'Kayleigh'),
  factory(13, 'James')
];

function factory(id, name) {
  return { id, name };
}
