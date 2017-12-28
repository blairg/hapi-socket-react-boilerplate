/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Moment from 'moment';

import Todo from './../../../src/client/components/containers/todo';

import './../../../public/css/skeleton.css';
import './../../../public/css/site.css';

const entry = { title: 'My Title', body: 'My Body', timestamp: Moment().unix() - 10 };

storiesOf('Todo', module)
  .addDecorator(story => (
    <div style={{ textAlign: 'center' }}>
      {story()}
    </div>
  ))
  .add('without an entry', () => <Todo />)
  .add('with an entry', () => <Todo entry={entry} />);
