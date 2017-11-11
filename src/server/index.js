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

// SSL Certificate
const options = {
    key: fs.readFileSync(`${process.cwd()}/ssl/cert.key`),
    cert: fs.readFileSync(`${process.cwd()}/ssl/cert.pem`),
};
/*eslint-enable */

// Create a server with a host and port
const server = new Hapi.Server({
    host: host,
    port: 3000,
});

// server.connection({
//     listener: Http2.createServer(options),
//     host: host,
//     port: 3000,
//     tls: true,
// });

// TODO: put in config
const socketPrefix = 'todos';

// Instrument Hapi.js Server
// server.register(Plugins, (error) => {
//     if (error) {
//         logToConsole('error', error);
//     }

//     server.route(Routes.Static);
//     server.route(Routes.Api);
//     server.route(Routes.Index);

//     server.subscription(`/${socketPrefix}`);
// });

// register plugins, wrapped in async/await
const applyPlugins = async () => {  
    await server.register(Plugins);

    server.route(Routes.Static);
    server.route(Routes.Api);
    server.route(Routes.Index);

    // var io = require("socket.io")(server.listener);
 
    // io.on("connection", function (socket) {
    
    //     console.log('connected');
    
    //     // Do all the socket stuff here.
    
    // })

    //server.subscription(`/${socketPrefix}`);
};

//liftOff();

// // Start the server
// server.start((err) => {
//     if (err) {
//         throw err;
//     }

//     logToConsole('info', `Server running at: ${server.info.uri}`);
// });

const startServer = async () => {
    try {  
        await applyPlugins();
        await server.start();
        logToConsole('info', `Server running at: ${server.info.uri}`);
    }
    catch (error) {  
        logToConsole('error', error);
    }
};

startServer();
