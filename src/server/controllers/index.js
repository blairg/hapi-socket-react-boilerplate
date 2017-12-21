import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import HttpStatus from 'http-status';
import DecodeHtml from 'decode-html';

import rootReducer from './../../client/reducers';
import CacheServiceImport from './../services/cacheService';

// React Components
import Todos from './../../client/components/containers/todos.jsx';
import Index from './../../client/components/presentation/index.jsx';

const loggerMiddleware = createLogger();
/*eslint-disable */
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware),
);
/* eslint-enable */

const cacheService = CacheServiceImport();

export default {
  index: {
    // Initial Load where Todos are server side rendered.
    handler: (request, reply) => {
      const todos = cacheService.get();

      /* eslint-disable react/jsx-filename-extension */
      const reduxStore = (
        <Provider store={store}>
          <Todos entries={todos} />
        </Provider>
      );
      const todoComponent = ReactDOMServer.renderToString(reduxStore);
      const indexComponent = <Index todos={todoComponent} />;

      let indexPage = DecodeHtml(
        ReactDOMServer.renderToStaticMarkup(indexComponent),
      );
      indexPage = indexPage.replace(/&quot;/gi, '"');

      return reply(indexPage).code(HttpStatus.OK);
    },
  },
};
