/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */

import HttpStatus from 'http-status';
import cache from 'memory-cache';
import { fn as momentProto } from 'moment';
import ApiController from './../../../src/server/controllers/api';

describe('server/controllers/api', () => {
  describe('server/controllers/api', () => {
    const todos = [{ title: 'my title', body: 'my body' }];

    describe('get/handler', () => {
      test('should return a list of todos', () => {
        const reply = () => ({
          code: () => HttpStatus.OK,
        });
        cache.get = jest.fn(() => JSON.stringify(todos));

        const requestSpy = jest.fn();
        const replySpy = jest.fn(reply);

        ApiController.get.handler(requestSpy, replySpy);

        expect(replySpy).toBeCalledWith(todos);
      });
    });

    describe('add/handler', () => {
      test('should add to data store and return a 201 response', () => {
        const request = {
          payload: todos[0],
          server: {
            publish: () => {},
          },
        };
        const reply = () => ({
          code: () => HttpStatus.CREATED,
        });

        momentProto.unix = jest.fn(() => 100);
        cache.get = jest.fn(() => JSON.stringify(todos));
        const replySpy = jest.fn(reply);

        ApiController.add.handler(request, replySpy);

        expect(replySpy).toBeCalledWith({ created: 'OK' });
      });

      test('should add to data store if data store is empty and return a 201 response', () => {
        const request = {
          payload: todos[0],
          server: {
            publish: () => {},
          },
        };
        const reply = () => ({
          code: () => HttpStatus.CREATED,
        });

        momentProto.unix = jest.fn(() => 100);
        cache.get = jest.fn(() => null);
        const replySpy = jest.fn(reply);

        ApiController.add.handler(request, replySpy);

        expect(replySpy).toBeCalledWith({ created: 'OK' });
      });

      test('should not add to data store and return a bad request', () => {
        const request = {
          payload: null,
          server: {
            publish: () => {},
          },
        };
        const reply = () => ({
          code: () => HttpStatus.BAD_REQUEST,
        });

        const replySpy = jest.fn(reply);

        ApiController.add.handler(request, replySpy);

        expect(replySpy).toBeCalledWith({ 'bad request': 'false' });
      });
    });

    describe('delete/handler', () => {
      test('should delete todos and return status of 205', () => {
        const request = {
          payload: null,
          server: {
            publish: () => {},
          },
        };
        const reply = () => ({
          code: () => HttpStatus.RESET_CONTENT,
        });

        cache.put = jest.fn(() => []);

        const replySpy = jest.fn(reply);

        ApiController.delete.handler(request, replySpy);

        expect(replySpy).toBeCalledWith({ deleted: 'OK' });
      });
    });
  });
});
