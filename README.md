# hapi-socket-react-boilerplate

[![Build Status](https://travis-ci.org/blairg/hapi-socket-react-boilerplate.svg?branch=master)](https://travis-ci.org/blairg/hapi-socket-react-boilerplate) [![Coverage Status](https://coveralls.io/repos/github/blairg/hapi-socket-react-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/blairg/hapi-socket-react-boilerplate?branch=master) [![Known Vulnerabilities](https://snyk.io/test/github/blairg/hapi-socket-react-boilerplate/badge.svg)](https://snyk.io/test/github/blairg/hapi-socket-react-boilerplate) [![dependencies Status](https://david-dm.org/blairg/hapi-socket-react-boilerplate/status.svg)](https://david-dm.org/blairg/hapi-socket-react-boilerplate) [![devDependencies Status](https://david-dm.org/blairg/hapi-socket-react-boilerplate/dev-status.svg)](https://david-dm.org/blairg/hapi-socket-react-boilerplate?type=dev)

Boilerplate app to get you up and running with Hapi, HTTP2, Web Socket and React.

Demo can be found [here](https://hapi-boilerplate-docker.herokuapp.com/index)

## Get it running locally

Assuming you are on Mac OS. Not tested on any other OS.

In the terminal run the following: -

* `git clone git@github.com:blairg/hapi-socket-react-boilerplate.git`
* `cd hapi-socket-react-boilerplate`
* Create certificate for HTTPS `npm run createCertificate`. Details are all optional.
* `npm i`
* `npm run dev`
* In your browser go to `https://localhost:3000/index` (add security exception rule for local cert)

### With docker

Ensure you have created the cert and key as per the previous step.

Assuming you have cloned the repo and installed the packages. Also, that you have Docker and Docker Compose installed too. In the terminal do the following, in the root of the directory you cloned the repo too: -

* `docker-compose up`
* In your browser go to `https://localhost:3000/index` (add security exception rule for local cert)

## Running tests

Following options: -

* To just run the unit tests -> `npm run test`
* To run tests with coverage (Istanbul) -> `npm run test:coverage`. This will output to `coverage` folder. Locate the `index.html` in here and open in your browser.
* To watch tests for changes -> `npm run test:watch`
* In VS Code you have 2 debug options avaiable for tests. `Mocha Tests` will execute tests. `Mocha Tests with Coverage`, will run tests with coverage.

## Linting

* Run ESLint with -> `npm run lint`

## Issues 

If you find anything wrong with this repo post [them here please]()
