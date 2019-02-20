const factory = (id, title, stars) => {
  return {
    id,
    stars,
    title
  };
};

export const ONE_SUCCESSFUL = factory(1, 'Successful Submission!', 1);
export const TWO_SUCCESSFUL = factory(2, 'Two Submissions!', 3);
export const THREE_SUCCESSFUL = factory(3, 'Three Submissions!', 5);
export const FASTEST_CAT_SYSTEM = factory(5, 'Fastest in Category: System', 1);
export const FASTEST_CAT_IL = factory(11, 'Fastest in Category: Intermediate Language', 1);
export const FASTEST_CAT_SCRIPT = factory(12, 'Fastest in Category: Scripting', 1);
export const FASTEST_ALL = factory(7, 'Fastest Overall', 2);
export const SMALLEST_ALL = factory(6, 'Smallest Overall', 1);
export const SMALLEST_CAT_SYSTEM = factory(4, 'Smallest in Category: System', 1);
export const SMALLEST_CAT_IL = factory(9, 'Smallest in Category: Intermediate Language', 1);
export const SMALLEST_CAT_SCRIPT = factory(10, 'Smallest in Category: Scripting', 1);
export const TIE_BREAKER = factory(8, 'Tie Breaker', 1);
