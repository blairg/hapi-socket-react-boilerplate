/* eslint-disable no-undef */

import sinon from 'sinon';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import CacheService from './../../../src/client/services/cacheService';

const sandbox = sinon.sandbox.create();
let mockAxios;

describe('client/services/cacheService', () => {
  beforeEach(() => {
    mockAxios = new MockAdapter(Axios);
  });

  afterEach(() => {
    mockAxios.reset();
    sandbox.restore();
  });

  describe('getTodos', () => {
    test('should call the callback with the correct arguments', async () => {
      const todo = { title: 'my title', body: 'my body' };
      const callback = sinon.spy();

      mockAxios.onGet('/todos').reply(200, todo);

      await CacheService.getTodos(callback);

      sinon.assert.calledWith(callback, todo, null);
    });

    test('should call the callback with an error status of 500', async () => {
      const callback = sinon.spy();

      mockAxios.onGet('/todos').reply(500);

      await CacheService.getTodos(callback);

      sinon.assert.calledWithExactly(callback, null, 500);
    });
  });
});
