/* eslint-disable no-undef */

import assert from 'assert';
import cache from 'memory-cache';
import sinon from 'sinon';
import CacheServiceImport from './../../../src/server/services/cacheService';

const sandbox = sinon.sandbox.create();
const cacheService = CacheServiceImport();

describe('server/services/cacheService', () => {
  describe('get', () => {
    beforeEach(() => {
      sandbox.stub(cache, 'get');
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should return the value when it exists in the cache', () => {
      const todo = [{ title: 'my title', body: 'my body' }];
      const todoJsonStringed = JSON.stringify(todo);
      cache.get.returns(todoJsonStringed);

      assert.deepEqual(cacheService.get('my value'), todo);
      sinon.assert.calledWith(cache.get, 'hapi-boilerplate-key');
    });

    it('should return an empty array when cache is empty', () => {
      cache.get.returns(null);

      assert.deepEqual(cacheService.get('my value'), []);
      sinon.assert.calledWith(cache.get, 'hapi-boilerplate-key');
    });
  });

  describe('set', () => {
    beforeEach(() => {
      sandbox.stub(cache, 'put');
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should set the cache when a non-null is passed in', () => {
      const todo = [{ title: 'my title', body: 'my body' }];

      cacheService.set(todo);
      sinon.assert.calledWith(cache.put, 'hapi-boilerplate-key', JSON.stringify(todo), 60000);
    });

    it('should not set the cache when null is passed in', () => {
      cacheService.set(undefined);
      sinon.assert.notCalled(cache.put);
    });
  });
});
