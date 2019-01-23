export default [
  factory(1, 'Successful Submission!', 1),
  factory(2, 'Two Submissions!', 3),
  factory(3, 'Three Submissions!', 5),
  factory(4, 'Smallest in Category', 1),
  factory(5, 'Fastest in Category', 1),
  factory(6, 'Smallest Overall', 1),
  factory(7, 'Successful Submission!', 1)
];

const factory = (id, title, stars) => {
  return {
    id,
    stars,
    title
  };
};
