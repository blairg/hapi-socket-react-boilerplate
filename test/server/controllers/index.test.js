/* eslint-disable no-undef */

import sinon from 'sinon';
import cache from 'memory-cache';
import HttpStatus from 'http-status';
import IndexController from './../../../src/server/controllers/index';

const sandbox = sinon.sandbox.create();

describe('server/controllers/index', () => {
  beforeEach(() => {
    sandbox.stub(cache, 'get');
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('server/controllers/index', () => {
    test('should return a SSR Index component', () => {
      const todos = JSON.stringify([{ title: 'my title', body: 'my body' }]);
      const reply = () => ({
        code: () => HttpStatus.OK,
      });

      cache.get.returns(todos);

      const requestSpy = sandbox.spy();
      const replySpy = sandbox.spy(reply);

      IndexController.index.handler(requestSpy, replySpy);

      sinon.assert.calledOnce(replySpy);
    });

    test('should return a SSR Index component even for no previous todos', () => {
      const todos = null;
      const reply = () => ({
        code: () => HttpStatus.OK,
      });

      cache.get.returns(todos);

      const requestSpy = sandbox.spy();
      const replySpy = sandbox.spy(reply);

      IndexController.index.handler(requestSpy, replySpy);

      sinon.assert.calledOnce(replySpy);
    });
  });
});
