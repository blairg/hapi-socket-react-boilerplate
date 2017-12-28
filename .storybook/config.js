import 'babel-polyfill';

import { configure } from '@storybook/react';

function loadStories() {
  require('../stories');
  require('../stories/components/containers/todo');
  require('../stories/components/containers/todos');
}

configure(loadStories, module);
