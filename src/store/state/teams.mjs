export default [factory(1, 'team A', [1, 2, 3]), factory(2, 'team B', [4, 5, 6])];

function factory(id, name, members) {
  return { id, name, members };
}
