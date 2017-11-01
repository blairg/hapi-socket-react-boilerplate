import { combineReducers } from 'redux';
import * as actionTypes from './../actionTypes';

export function setTitle(state = { title: '' }, action) {
  switch (action.type) {
    case actionTypes.SET_TITLE:
      return { ...state, title: action.title };
    default:
      return state;
  }
}

export function setBody(state = { body: '' }, action) {
  switch (action.type) {
    case actionTypes.SET_BODY:
      return { ...state, body: action.body };
    default:
      return state;
  }
}

export function addPost(state = { post: { title: '', body: '' } }, action) {
  switch (action.type) {
    case actionTypes.ADD_POST:
      return { ...state, post: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  setTitle,
  setBody,
  addPost,
});

export default rootReducer;
