/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Todos } from './../../../../src/client/components/containers/todos.jsx';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('./../../../../src/client/subscribers/todoSubscriber');

describe('<Todos />', () => {
  test('should render correctly with data', () => {
    const entries = [{ title: 'my title', body: 'my body' }];
    const wrapper = Enzyme.shallow(<Todos entries={entries} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly without data', () => {
    const entries = [];
    const wrapper = Enzyme.shallow(<Todos entries={entries} />);

    expect(wrapper).toMatchSnapshot();
  });
});
