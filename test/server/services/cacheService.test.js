/* eslint-disable no-undef */

import cache from 'memory-cache';
import CacheServiceImport from './../../../src/server/services/cacheService';

const cacheService = CacheServiceImport();

describe('server/services/cacheService', () => {
  describe('get', () => {
    test('should return the value when it exists in the cache', () => {
      const todo = [{ title: 'my title', body: 'my body' }];
      const todoJsonStringed = JSON.stringify(todo);

      cache.get = jest.fn(() => todoJsonStringed);

      expect(cacheService.get('my value')).toEqual(todo);
      expect(cache.get).toHaveBeenCalledWith('hapi-boilerplate-key');
    });

    test('should return an empty array when cache is empty', () => {
      cache.get = jest.fn(() => null);

      expect(cacheService.get('my value')).toEqual([]);
      expect(cache.get).toHaveBeenCalledWith('hapi-boilerplate-key');
    });
  });

  describe('set', () => {
    test('should set the cache when a non-null is passed in', () => {
      const todo = [{ title: 'my title', body: 'my body' }];

      cache.put = jest.fn();
      cacheService.set({ values: todo });

      expect(cache.put).toHaveBeenCalledWith(
        'hapi-boilerplate-key',
        JSON.stringify(todo),
        60000,
      );
    });

    test('should not set the cache when null is passed in', () => {
      cacheService.set({ values: undefined });
      cache.put = jest.fn();

      expect(cache.put).toHaveBeenCalledTimes(0);
    });
  });
});
