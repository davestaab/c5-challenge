export default [
  factory(1, 'Bits Please Team Egg-cellence', [1, 2, 3]),
  factory(2, 'Gold Team', [4, 5, 6]),
  factory(3, 'Team 7', [7, 8, 9]),
  factory(4, 'The Steer', [10]),
  factory(5, 'KnoxVillains', [11, 12, 13])
];

function factory(id, name, members) {
  return { id, name, members };
}
