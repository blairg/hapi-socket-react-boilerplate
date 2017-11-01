import React from 'react';
import PropTypes from 'prop-types';

const Index = (props) => {
  const { todos } = props;

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>Node.js + Hapi.js + Socket.io + HTTPS + HTTP/2 + React.js + Redux.js | Todo Example</title>
        <link rel="stylesheet" href="/css/normalize.css" />
        <link rel="stylesheet" href="/css/skeleton.css" />
        <link rel="stylesheet" href="/css/site.css" />
      </head>
      <body>
        <div id="app">
          {todos}
        </div>
        <script src="/js/bundle.js" defer />
      </body>
    </html>
  );
};

Index.propTypes = {
  todos: PropTypes.string.isRequired,
};

export default Index;
