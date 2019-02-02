import ChallengeComponent from '../ChallengeOneComponent';
import { render } from 'vue-testing-library';

it("should render challenge before it's announced", () => {
  const challenge = {
    id: 5,
    title: 'test title',
    description: 'description',
    eventDate: '2019-03-15',
    announcementDate: '2019-01-31',
    teamSubmissionDate: '2019-01-31'
  };
  const { getByTestId } = factory({ challenge });
  expect(getByTestId('title')).toHaveTextContent('Upcoming Challenge');
  expect(getByTestId('description')).toHaveTextContent('The current challenge will be announced on Jan 31, 2019');
  expect(getByTestId('deadline')).toHaveTextContent('Submission Deadline: Mar 15, 2019');
});

function factory(propsData) {
  return render(ChallengeComponent, {
    propsData
  });
}
