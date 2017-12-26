import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Todo from './../../../src/client/components/containers/todo.jsx';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

const entry = { title: 'My Title', body: 'My Body', timestamp: 10000 };

storiesOf('Todo', module)
  .addDecorator(story => (
    <div style={{ textAlign: 'center' }}>
      {story()}
    </div>
  ))
  .add('without any entries', () => <Todo />)
  .add('with entries', () => <Todo entry={entry} />);
