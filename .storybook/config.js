import { configure } from '@storybook/react';

function loadStories() {
  require('../stories');
  require('../stories/components/containers/todo');
}

configure(loadStories, module);
