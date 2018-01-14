// @flow

import Axios from 'axios';

import * as actionTypes from './../actionTypes';

export function setTitle(title: string) {
  return {
    type: actionTypes.SET_TITLE,
    title,
  };
}

export function setBody(body: string) {
  return {
    type: actionTypes.SET_BODY,
    body,
  };
}

type Post = {
  title: string,
  body: string,
};

type PostState = () => {
  setTitle: { title: string },
  setBody: { body: string },
};

export function addPost() {
  return async (
    dispatch: ({ type: string, payload: Post }) => {},
    getState: PostState,
  ) => {
    const state = getState();
    const post: Post = {
      title: state.setTitle.title,
      body: state.setBody.body,
    };

    try {
      await Axios.post('/todos', post);
      dispatch({ type: actionTypes.ADD_POST, payload: post });
    } catch (error) {
      /* eslint-disable */
      console.error(error);
      /* eslint-enable */
    }
  };
}

export function setTodos(todos: Array<any>) {
  return {
    type: actionTypes.SET_TODOS,
    todos,
  };
}
