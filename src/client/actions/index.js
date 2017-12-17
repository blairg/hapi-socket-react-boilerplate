import Axios from 'axios';

import * as actionTypes from './../actionTypes';

export function setTitle(title) {
  return {
    type: actionTypes.SET_TITLE,
    title,
  };
}

export function setBody(body) {
  return {
    type: actionTypes.SET_BODY,
    body,
  };
}

export function addPost() {
  return async (dispatch, getState) => {
    const { title } = getState().setTitle;
    const { body } = getState().setBody;
    const post = { title, body };

    try {
      const response = await Axios.post('/todos', post);

      dispatch({ type: actionTypes.ADD_POST, payload: response.data });
    } catch (error) {
      /* eslint-disable */
      console.error(error);
      /* eslint-enable */
    }
  };
}

export function setTodos(todos) {
  return {
    type: actionTypes.SET_TODOS,
    todos,
  };
}
