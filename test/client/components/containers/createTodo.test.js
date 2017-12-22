/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import CreateTodo from './../../../../src/client/components/containers/createTodo.jsx';

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
});
