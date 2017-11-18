# hapi-socket-react-boilerplate

Boilerplate app to get you up and running with Hapi, HTTP/2, Web Sockets and React.

[![Build Status](https://travis-ci.org/blairg/hapi-socket-react-boilerplate.svg?branch=master)](https://travis-ci.org/blairg/hapi-socket-react-boilerplate) [![Coverage Status](https://coveralls.io/repos/github/blairg/hapi-socket-react-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/blairg/hapi-socket-react-boilerplate?branch=master) [![Known Vulnerabilities](https://snyk.io/test/github/blairg/hapi-socket-react-boilerplate/badge.svg)](https://snyk.io/test/github/blairg/hapi-socket-react-boilerplate) [![dependencies Status](https://david-dm.org/blairg/hapi-socket-react-boilerplate/status.svg)](https://david-dm.org/blairg/hapi-socket-react-boilerplate) [![devDependencies Status](https://david-dm.org/blairg/hapi-socket-react-boilerplate/dev-status.svg)](https://david-dm.org/blairg/hapi-socket-react-boilerplate?type=dev)

## Example Application

Deployed on Heroku. HTTP/2 is not currently supported on Heroku ([supported versions](https://devcenter.heroku.com/articles/http-routing#http-versions-supported), so this can not be showcased. If there is appetitle for a fully fledged app with proper SSL and HTTP/2, I'll stand something up on Digital Ocean.

[!Heroku App](https://hapi-boilerplate-docker.herokuapp.com/index)]

## Run Locally

First step is to clone the repo from Github - [repo](https://github.com/blairg/hapi-socket-react-boilerplate.git).

Then you have 2 options, native or with Docker. For both you will need to create a certificate and key for SSL. For Mac, you can do using the following link [Create SSL Certificate on Mac](https://certsimple.com/blog/localhost-ssl-fix). For other platforms, it's a case of Googling if you've not done it before.

### Natively

Make sure you have Node 8.9 and NPM 5.5.1 at least installed. Or even better you are using NVM.

Do the following steps: -

* Navigate to the cloned repo in terminal
* Run - `npm i`
* Run - `npm dev`
* In your browser go to - https://localhost:3000/index

### Docker

Do the following steps: -

* Navigate to the cloned repo in terminal
* Run - `docker-compose build`
* Run - `docker-compose up`
* In your browser go to - [Running Application](https://localhost:3000/index)

### Tests

* npm test
* Test watcher - `npm run test:watch`
* With coverage - `npm run test:coverage`
* In VS Code - Mocha Tests debug task
* In VS Code with coverage - Mocha Tests with Coverage debug task

### Linting

Run - `npm run lint`

### Debugging

In VS Code, I've created the following debug tasks: -

* Debug Dev - will only step through the project modules and not node or internal modules.
* Debug Dev with Modules - includes node and internal modules.

### Useful Links

* [Travis CI -](https://travis-ci.org/blairg/hapi-socket-react-boilerplate)
* [Coveralls -](https://coveralls.io/github/blairg/hapi-socket-react-boilerplate?branch=master)