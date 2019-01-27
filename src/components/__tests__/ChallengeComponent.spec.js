import ChallengeComponent from '../ChallengeComponent';
import { render } from 'vue-testing-library';

it('should render challenge fields', () => {
  const challenge = {
    id: 5,
    title: 'test title',
    description: 'description',
    eventDate: '2019-03-15',
    announcementDate: '2019-01-31',
    teamSubmissionDate: '2019-01-31'
  };
  const { getByTestId } = factory({ challenge });
  expect(getByTestId('title')).toHaveTextContent('test title');
  expect(getByTestId('description')).toHaveTextContent('description');
  expect(getByTestId('deadline')).toHaveTextContent('Mar 15, 2019');
});

function factory(propsData) {
  return render(ChallengeComponent, {
    propsData
  });
}
