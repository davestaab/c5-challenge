export const ONE_SUCCESSFUL = factory(1, 'Successful Submission!', 1);
export const TWO_SUCCESSFUL = factory(2, 'Two Submissions!', 3);
export const THREE_SUCCESSFUL = factory(3, 'Three Submissions!', 5);
export const SMALLEST_CAT = factory(4, 'Smallest in Category', 1);
export const FASTEST_CAT = factory(5, 'Fastest in Category', 1);
export const SMALLEST_ALL = factory(6, 'Smallest Overall', 1);
export const FASTEST_ALL = factory(7, 'Fastest Overall', 1);

const factory = (id, title, stars) => {
  return {
    id,
    stars,
    title
  };
};
