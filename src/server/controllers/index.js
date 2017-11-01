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
import Todos from './../../client/components/presentation/todos.jsx';
import Index from './../../client/components/presentation/index.jsx';

const loggerMiddleware = createLogger();
const store = createStore(rootReducer, applyMiddleware(
  thunkMiddleware,
  loggerMiddleware,
));

const cacheService = CacheServiceImport();

module.exports = {
  index: {
    // Initial Load where Todos are server side rendered.
    handler: (request, reply) => {
      const todos = cacheService.get();

      const todoComponent = ReactDOMServer.renderToString(<Provider store={store}><Todos
        entries={todos}
      />
      </Provider>);

      let indexPage = DecodeHtml(
        ReactDOMServer.renderToStaticMarkup(<Index todos={todoComponent} />),
      );
      indexPage = indexPage.replace(/&quot;/gi, '"');

      return reply(indexPage).code(HttpStatus.OK);
    },
  },
};
