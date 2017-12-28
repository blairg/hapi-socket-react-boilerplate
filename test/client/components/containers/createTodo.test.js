/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import CreateTodo from './../../../../src/client/components/containers/createTodo.jsx';

const middlewares = [];
const mockStore = configureStore(middlewares);
const todo = { title: 'my title', body: 'my body' };
const initialState = { setTodos: { todos: [todo] } };
const store = mockStore(initialState);

let mockAxios;

describe('client/components/containers/createTodo -> <CreateTodo />', () => {
  const event = { preventDefault: () => {} };

  beforeEach(() => {
    mockAxios = new MockAdapter(Axios);
    jest.spyOn(event, 'preventDefault');
  });

  afterEach(() => {
    mockAxios.reset();
  });

  describe('CreateTodo.handleDelete(event)', () => {
    test('should call Axios.delete and event.preventDefault()', async () => {
      mockAxios.onDelete('/todos').reply(200);
      const success = await CreateTodo.handleDelete(event);

      expect(event.preventDefault).toBeCalled();
      expect(success).toBeTruthy();
    });

    test('should call Axios.delete and throw error', async () => {
      mockAxios.onDelete('/todos').networkError();
      const success = await CreateTodo.handleDelete(event);

      expect(event.preventDefault).toBeCalled();
      expect(success).toBeFalsy();
    });
  });

  describe('<CreateTodo />', () => {
    test('should render correctly', () => {
      const tree = renderer.create(<CreateTodo store={store} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
