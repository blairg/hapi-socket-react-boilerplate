/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Todos from './../../../../src/client/components/containers/todos.jsx';
import Index from './../../../../src/client/components/presentation/index.jsx';

const middlewares = [];
const mockStore = configureStore(middlewares);

Enzyme.configure({ adapter: new Adapter() });

describe('client/components/presentation/index -> <Index todos={todos} />', () => {
  test('should contain body and title in the Index component', () => {
    const todo = { title: 'my title', body: 'my body' };

    const initialState = { setTodos: { todos: [todo] } };
    const store = mockStore(initialState);

    const todosComponent = (
      <Provider store={store}>
        <Todos entries={[todo]} />
      </Provider>
    );
    const wrapper = Enzyme.shallow(<Index todos={todosComponent} />);

    expect(wrapper.html().includes(todo.title)).toBeTruthy();
    expect(wrapper.html().includes(todo.body)).toBeTruthy();
  });
});
