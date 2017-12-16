/* eslint-disable no-undef */

import sinon from 'sinon';
import HttpStatus from 'http-status';
import cache from 'memory-cache';
import { fn as momentProto } from 'moment';
import ApiController from './../../../src/server/controllers/api';

const sandbox = sinon.sandbox.create();

describe('server/controllers/api', () => {
  beforeEach(() => {
    sandbox.stub(cache, 'get');
    sandbox.stub(cache, 'put');
    sandbox.stub(momentProto, 'unix');
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('server/controllers/api', () => {
    describe('get/handler', () => {
      it('should return a list of todos', () => {
        const todos = [{ title: 'my title', body: 'my body' }];
        const reply = () => ({
          code: () => HttpStatus.OK,
        });

        cache.get.returns(JSON.stringify(todos));

        const requestSpy = sandbox.spy();
        const replySpy = sandbox.spy(reply);

        ApiController.get.handler(requestSpy, replySpy);

        sinon.assert.calledWith(replySpy, todos);
      });
    });

    describe('add/handler', () => {
      it('should add to data store and return a 201 response', () => {
        const todos = [{ title: 'my title', body: 'my body' }];
        const request = {
          payload: todos[0],
          server: {
            publish: () => {},
          },
        };
        const reply = () => ({
          code: () => HttpStatus.CREATED,
        });

        momentProto.unix.returns(100);
        cache.get.returns(JSON.stringify(todos));
        const replySpy = sandbox.spy(reply);

        ApiController.add.handler(request, replySpy);

        sinon.assert.calledWith(replySpy, { created: 'OK' });
      });

      it('should add to data store if data store is empty and return a 201 response', () => {
        const todos = [{ title: 'my title', body: 'my body' }];
        const request = {
          payload: todos[0],
          server: {
            publish: () => {},
          },
        };
        const reply = () => ({
          code: () => HttpStatus.CREATED,
        });

        momentProto.unix.returns(100);
        cache.get.returns(null);
        const replySpy = sandbox.spy(reply);

        ApiController.add.handler(request, replySpy);

        sinon.assert.calledWith(replySpy, { created: 'OK' });
      });

      it('should not add to data store and return a bad request', () => {
        const request = {
          payload: null,
          server: {
            publish: () => {},
          },
        };
        const reply = () => ({
          code: () => HttpStatus.BAD_REQUEST,
        });

        const replySpy = sandbox.spy(reply);

        ApiController.add.handler(request, replySpy);

        sinon.assert.calledWith(replySpy, { 'bad request': 'false' });
      });
    });

    describe('delete/handler', () => {
      it('should delete todos and return status of 205', () => {
        const request = {
          payload: null,
          server: {
            publish: () => {},
          },
        };
        const reply = () => ({
          code: () => HttpStatus.RESET_CONTENT,
        });

        cache.put.returns([]);

        const replySpy = sandbox.spy(reply);

        ApiController.delete.handler(request, replySpy);

        sinon.assert.calledWith(replySpy, { deleted: 'OK' });
      });
    });
  });
});
