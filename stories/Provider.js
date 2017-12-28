/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable global-require */

import React from 'react';
import PropTypes from 'prop-types';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './../src/client/reducers/index';

const loggerMiddleware = createLogger();

function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./../src/client/reducers/index', () => {
      const nextRootReducer = require('./../src/client/reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export default function Provider({ story, initialState = {} }) {
  const store = configureStore(initialState);

  return (
    <ReduxProvider store={store}>
      {story}
    </ReduxProvider>
  );
}

Provider.propTypes = {
  story: PropTypes.object.isRequired,
  initialState: PropTypes.object.isRequired,
};
