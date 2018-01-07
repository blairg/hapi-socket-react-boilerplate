import React from 'react';
import PropTypes from 'prop-types';

const Index = (props) => {
  const { todos } = props;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>
          Node.js + Hapi.js + Web Sockets + HTTPS + HTTP/2 + React.js + Redux.js |
          Todo Example
        </title>
        <meta name="description" content="Boilerplate app to get you up and running with Hapi, HTTP/2, Web Sockets and React." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preload" as="style" href="/css/vendors.css" />
        <link rel="preload" as="style" href="/css/bundle.css" />
        <link rel="preload" as="script" href="/js/bundle.js" />
        <link rel="stylesheet" type="text/css" href="/css/vendors.css" />
        <link rel="stylesheet" type="text/css" href="/css/bundle.css" />
      </head>
      <body>
        <main>
          <div id="app">
            {todos}
          </div>
        </main>
        <script async src="/js/bundle.js" />
      </body>
    </html>
  );
};

Index.propTypes = {
  todos: PropTypes.string.isRequired,
};

export default Index;
