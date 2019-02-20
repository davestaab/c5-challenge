import Results from '../Results';
import { render } from 'vue-testing-library';
import BaseHeader from '../BaseHeader';
import BaseSubheader from '../BaseSubheader';
import BaseText from '../BaseText';
import VueMarkdown from 'vue-markdown';
import { ONE_SUCCESSFUL, THREE_SUCCESSFUL } from '@/store/state/submissionStars';

let store;
beforeEach(() => {
  store = {
    state: {},
    getters: {
      getCurrentChallenge() {
        return { id: 1, title: 'challenge title' };
      },
      getTeamsForChallenge: () => () => {
        return [
          {
            name: 'beta team',
            starCount: 4,
            submissionStars: [ONE_SUCCESSFUL, THREE_SUCCESSFUL],
            people: [{ name: 'cedric' }, { name: 'dan' }]
          },
          {
            name: 'alpha team',
            submissionStars: [THREE_SUCCESSFUL],
            starCount: 3,
            people: [{ name: 'adam' }, { name: 'ben' }]
          }
        ];
      }
    }
  };
});

it('should render challenge title', async () => {
  const { getByTestId } = factory();
  expect(getByTestId('resultsTitle')).toHaveTextContent('Results: challenge title');
});

it('should show table with results', async () => {
  const { getByTestId, getAllByTestId, queryByText, getAllByText } = factory();
  // headers
  expect(getByTestId('resultTable')).toContainElement(queryByText('Team'));
  expect(getByTestId('resultTable')).toContainElement(queryByText('Members'));
  expect(getByTestId('resultTable')).toContainElement(queryByText('Scoring'));
  expect(getByTestId('resultTable')).toContainElement(queryByText('Stars'));
  // table
  expect(getAllByTestId('resultRow').length).toBe(2);
  // first row
  expect(getAllByTestId('resultRow')[0]).toContainElement(queryByText('beta team'));
  expect(getAllByTestId('resultRow')[0]).toContainElement(queryByText('cedric'));
  expect(getAllByTestId('resultRow')[0]).toContainElement(queryByText('dan'));
  expect(getAllByTestId('resultRow')[0]).toContainElement(queryByText('Successful Submission!'));
  expect(getAllByTestId('resultRow')[0]).toContainElement(queryByText('Three Submissions!'));
  expect(getAllByTestId('resultRow')[0]).toContainElement(queryByText('⭐'));
  // totals stars should be 12
  expect(getAllByText('⭐').length).toBe(11);
});

function factory() {
  return render(
    Results,
    {
      store
    },
    localVue => {
      localVue.component('BaseHeader', BaseHeader);
      localVue.component('BaseSubheader', BaseSubheader);
      localVue.component('BaseText', BaseText);
      localVue.component('VueMarkdown', VueMarkdown);
    }
  );
}
