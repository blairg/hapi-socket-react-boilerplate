import Hapi from 'hapi';
import Http2 from 'http2';
import Nes from 'nes';
import Inert from 'inert';
import path from 'path';
import fs from 'fs';
import winston from 'winston';

// Hapi JS - Routes
import Routes from './routes/all';

// SSL Certificate
const options = {
  key: fs.readFileSync(`${process.cwd()}/ssl/cert.key`),
  cert: fs.readFileSync(`${process.cwd()}/ssl/cert.pem`),
};

// Logging
const logToConsole = (type, message) => {
  if (type === 'error') {
    winston.log('error', message);
  }

  winston.log('info', message);
};

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  listener: Http2.createServer(options),
  host: 'localhost',
  port: 3000,
  tls: true,
});

// TODO: put in config
const socketPrefix = 'todos';

// Instrument Hapi.js Server
server.register([Nes, Inert], (error) => {
  if (error) {
    logToConsole('error', error);
  }

  server.route(Routes.Static);
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
