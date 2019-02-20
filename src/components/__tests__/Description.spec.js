import Description from '../Description';
import { render, wait } from 'vue-testing-library';
import BaseHeader from '../BaseHeader';
import BaseSubheader from '../BaseSubheader';
import BaseText from '../BaseText';
import VueMarkdown from 'vue-markdown';
import AsyncComputed from 'vue-async-computed';

let store;
beforeEach(() => {
  fetch.resetMocks();
  store = {
    state: {},
    getters: {
      getCurrentChallenge() {
        return { id: 1 };
      }
    }
  };
});

it('should render challenge writeup', async () => {
  fetch.mockResponseOnce('# new challenge title\n## subtitle');

  const { container, getByText } = factory({});
  await wait(() => {
    return getByText('new challenge title');
  });
  expect(container.firstChild).toContainHTML('<h1>new challenge title</h1>');
  expect(container.firstChild).toContainHTML('<h2>subtitle</h2>');
});

function factory(propsData) {
  return render(
    Description,
    {
      propsData,
      store
    },
    localVue => {
      localVue.use(AsyncComputed);
      localVue.component('BaseHeader', BaseHeader);
      localVue.component('BaseSubheader', BaseSubheader);
      localVue.component('BaseText', BaseText);
      localVue.component('VueMarkdown', VueMarkdown);
    }
  );
}
