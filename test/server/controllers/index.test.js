/* eslint-disable no-undef */

import cache from 'memory-cache';
import HttpStatus from 'http-status';
import IndexController from './../../../src/server/controllers/index';

describe('server/controllers/index', () => {
  describe('server/controllers/index', () => {
    test('should return a SSR Index component', () => {
      const todos = JSON.stringify([{ title: 'my title', body: 'my body' }]);
      const reply = () => ({
        code: () => HttpStatus.OK,
      });

      cache.get = jest.fn(() => todos);

      const requestSpy = jest.fn();
      const replySpy = jest.fn(reply);

      IndexController.index.handler(requestSpy, replySpy);

      expect(replySpy).toHaveBeenCalledTimes(1);
    });

    test('should return a SSR Index component even for no previous todos', () => {
      const todos = null;
      const reply = () => ({
        code: () => HttpStatus.OK,
      });

      cache.get = jest.fn(() => todos);

      const requestSpy = jest.fn();
      const replySpy = jest.fn(reply);

      IndexController.index.handler(requestSpy, replySpy);

      expect(replySpy).toHaveBeenCalledTimes(1);
    });
  });
});
