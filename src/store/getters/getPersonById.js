import find from 'lodash/find';

const getPersonById = ({ people }) => id => {
  return find(people, { id: id });
};

export default getPersonById;
