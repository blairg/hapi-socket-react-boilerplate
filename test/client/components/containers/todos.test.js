/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import Todos from './../../../../src/client/components/containers/todos.jsx';

const middlewares = [];
const mockStore = configureStore(middlewares);
const todo = { title: 'my title', body: 'my body' };
const initialState = { setTodos: { todos: [todo] } };
const store = mockStore(initialState);

Enzyme.configure({ adapter: new Adapter() });

jest.mock('./../../../../src/client/subscribers/todoSubscriber');

describe('<Todos />', () => {
  test('should render correctly with data', () => {
    const entries = [{ title: 'my title', body: 'my body' }];
    const wrapper = Enzyme.shallow(<Todos store={store} entries={entries} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly without data', () => {
    const entries = [];
    const wrapper = Enzyme.shallow(<Todos store={store} entries={entries} />);

    expect(wrapper).toMatchSnapshot();
  });
});
