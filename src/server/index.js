import Hapi from 'hapi';
import Http2 from 'http2';
import fs from 'fs';
import winston from 'winston';

// Hapi JS - Plugins
import Plugins from './plugins';

// Hapi JS - Routes
import Routes from './routes/all';

// Logging
const logToConsole = (type, message) => {
  if (type === 'error') {
    winston.log('error', message);
  }

  winston.log('info', message);
};

/*eslint-disable */
const host = process.env.HOST ? process.env.HOST : 'localhost';
const port = process.env.PORT ? process.env.PORT : 3000;
/* eslint-enable */

// Create a server with a host and port
const server = new Hapi.Server();

if (!process.env.PROD) {
  /*eslint-disable */
  // SSL Certificate
  const options = {
    key: fs.readFileSync(`${process.cwd()}/ssl/cert.key`),
    cert: fs.readFileSync(`${process.cwd()}/ssl/cert.pem`),
  };
  /* eslint-enable */

  server.connection({
    listener: Http2.createServer(options),
    host,
    port,
    tls: true,
  });
} else {
  server.connection({
    host,
    port,
  });
}

// TODO: put in config
const socketPrefix = 'todos';

// Instrument Hapi.js Server
server.register(Plugins, (error) => {
  if (error) {
    logToConsole('error', error);
  }

  server.route(Routes.Public);
  server.route(Routes.Api);
  server.route(Routes.Index);

  server.subscription(`/${socketPrefix}`);
});

// Start the server
server.start((err) => {
  if (err) {
    throw err;
  }

  logToConsole('info', `Server running at: ${server.info.uri}`);
});
