/* eslint-disable no-undef */

import assert from 'assert';
import sinon from 'sinon';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import * as actionTypes from './../../../src/client/actionTypes';
import {
  setTitle,
  setBody,
  addPost,
  setTodos,
} from './../../../src/client/actions/index';

const sandbox = sinon.sandbox.create();
let mockAxios;

describe('client/actions/index', () => {
  beforeEach(() => {
    mockAxios = new MockAdapter(Axios);
  });

  afterEach(() => {
    sandbox.restore();
    mockAxios.reset();
  });

  describe('setTitle', () => {
    it('should create an action to add a title', () => {
      const title = 'my title';
      const expected = {
        type: actionTypes.SET_TITLE,
        title,
      };

      assert.deepEqual(setTitle(title), expected);
    });
  });

  describe('setBody', () => {
    it('should create an action to add a body', () => {
      const body = 'my title';
      const expected = {
        type: actionTypes.SET_BODY,
        body,
      };

      assert.deepEqual(setBody(body), expected);
    });
  });

  describe('addPost', () => {
    it('should dispatch action to create a post', async () => {
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
      const dispatch = sandbox.spy();

      mockAxios.onPost('/todos', post).reply(200, post);
      await addPost()(dispatch, getState);

      sinon.assert.calledWith(dispatch, {
        type: actionTypes.ADD_POST,
        payload: post,
      });
    });

    it('should not dispatch action as post request failed', async () => {
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
      const dispatch = sandbox.spy();

      mockAxios.onPost('/todos', post).reply(500);
      await addPost()(dispatch, getState);

      sinon.assert.notCalled(dispatch);
    });
  });

  describe('setTodos', () => {
    it('should create an action to set todos', () => {
      const todos = { title: 'my title', body: 'my body', timestamp: 2131231 };
      const expected = {
        type: actionTypes.SET_TODOS,
        todos,
      };

      assert.deepEqual(setTodos(todos), expected);
    });
  });
});
