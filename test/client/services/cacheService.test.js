/* eslint-disable no-undef */

import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import CacheService from './../../../src/client/services/cacheService';

let mockAxios;

describe('client/services/cacheService', () => {
  beforeEach(() => {
    mockAxios = new MockAdapter(Axios);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  describe('getTodos', () => {
    test('should call the callback with the correct arguments', async () => {
      const todo = { title: 'my title', body: 'my body' };
      const callback = jest.fn();

      mockAxios.onGet('/todos').reply(200, todo);

      await CacheService.getTodos(callback);

      expect(callback).toBeCalledWith('fail ff', null);
    });

    test('should call the callback with an error status of 500', async () => {
      const callback = jest.fn();

      mockAxios.onGet('/todos').reply(500);

      await CacheService.getTodos(callback);

      expect(callback).toBeCalledWith(null, 500);
    });
  });
});
