/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import renderer from 'react-test-renderer';

import Todo from './../../../../src/client/components/containers/todo.jsx';

describe('<Todo />', () => {
  test('should render correctly', () => {
    const entry = { title: 'My Title', body: 'My Body', timestamp: 10000 };

    const tree = renderer.create(<Todo entry={entry} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
