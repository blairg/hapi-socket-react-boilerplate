/* eslint-disable no-undef */

import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import * as actionTypes from './../../../src/client/actionTypes';
import {
  setTitle,
  setBody,
  addPost,
  setTodos,
} from './../../../src/client/actions/index';

let mockAxios;

describe('client/actions/index', () => {
  beforeEach(() => {
    mockAxios = new MockAdapter(Axios);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  describe('setTitle', () => {
    test('should create an action to add a title', () => {
      const title = 'my title';
      const expected = {
        type: actionTypes.SET_TITLE,
        title,
      };

      expect(setTitle(title)).toEqual(expected);
    });
  });

  describe('setBody', () => {
    test('should create an action to add a body', () => {
      const body = 'my title';
      const expected = {
        type: actionTypes.SET_BODY,
        body,
      };

      expect(setBody(body)).toEqual(expected);
    });
  });

  describe('addPost', () => {
    test('should dispatch action to create a post', async () => {
      const post = { title: 'my title', body: 'my body' };
      const initialState = {
        setTitle: {
          title: post.title,
        },
        setBody: {
          body: post.body,
        },
      };
      const getState = () => initialState;
      const dispatch = jest.fn();

      mockAxios.onPost('/todos', post).reply(200, post);
      await addPost()(dispatch, getState);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.ADD_POST,
        payload: post,
      });
    });

    test('should not dispatch action as post request failed', async () => {
      const post = { title: 'my title', body: 'my body' };
      const initialState = {
        setTitle: {
          title: post.title,
        },
        setBody: {
          body: post.body,
        },
      };
      const getState = () => initialState;
      const dispatch = jest.fn();

      mockAxios.onPost('/todos', post).reply(500);
      await addPost()(dispatch, getState);

      expect(dispatch).toHaveBeenCalledTimes(0);
    });
  });

  describe('setTodos', () => {
    test('should create an action to set todos', () => {
      const todos = { title: 'my title', body: 'my body', timestamp: 2131231 };
      const expected = {
        type: actionTypes.SET_TODOS,
        todos,
      };

      expect(setTodos(todos)).toEqual(expected);
    });
  });
});
