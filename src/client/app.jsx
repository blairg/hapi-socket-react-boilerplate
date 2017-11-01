/* eslint-disable */
import 'babel-polyfill';
/* eslint-enable */

import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

import Todos from './components/presentation/todos.jsx';

import CacheService from './services/cacheService';

const loggerMiddleware = createLogger();

/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware, // neat middleware that logs actions
  ),
);

const getTodos = (entries) => {
  hydrate(<Provider store={store}>
    <Todos entries={entries} />
  </Provider>, document.getElementById('app'));
};

CacheService.getTodos(getTodos);
