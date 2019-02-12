import Description from '../Description';
import { render, wait } from 'vue-testing-library';
import BaseHeader from '../BaseHeader';
import BaseSubheader from '../BaseSubheader';
import BaseText from '../BaseText';
import VueMarkdown from 'vue-markdown';
beforeEach(() => {
  fetch.resetMocks();
});

it('should render challenge writeup', async () => {
  fetch.mockResponseOnce('# new challenge title\n## subtitle');
  const challenge = {
    id: 5
  };
  const { getByTestId, container } = factory({ challenge });
  await wait();
  expect(getByTestId('challengeDescription')).toHaveTextContent('new challenge title');
  expect(container.firstChild).toContainHTML('<h1>new challenge title</h1>');
  expect(container.firstChild).toContainHTML('<h2>subtitle</h2>');
});

function factory(propsData) {
  return render(
    Description,
    {
      propsData
    },
    localVue => {
      localVue.component('BaseHeader', BaseHeader);
      localVue.component('BaseSubheader', BaseSubheader);
      localVue.component('BaseText', BaseText);
      localVue.component('VueMarkdown', VueMarkdown);
    }
  );
}
