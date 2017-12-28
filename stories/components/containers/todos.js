/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Moment from 'moment';

import Provider from './../../Provider';
import Todos from './../../../src/client/components/containers/todos';

import './../../../public/css/skeleton.css';
import './../../../public/css/site.css';

const timeNow = Moment().unix();
const entries = [
  { title: 'First Title', body: 'First Body', timestamp: timeNow - 10 },
  { title: 'Second Title', body: 'Second Body', timestamp: timeNow - 50 },
  { title: 'Third Title', body: 'Third Body', timestamp: timeNow - 100 },
];
const initialState = {
  setTodos: {
    todos: entries,
  },
};

storiesOf('Todos without data', module)
  .addDecorator(getStory => (
    <Provider story={getStory()} initialState={{}} />
  ))
  .add('without entries', () => <Todos entries={[]} />);

storiesOf('Todos with data', module)
  .addDecorator(getStory => (
    <Provider story={getStory()} initialState={initialState} />
  ))
  .add('with entries', () => <Todos entries={entries} />);
