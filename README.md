# hapi-socket-react-boilerplate

[![Build Status](https://travis-ci.org/blairg/hapi-socket-react-boilerplate.svg?branch=master)](https://travis-ci.org/blairg/hapi-socket-react-boilerplate) [![Coverage Status](https://coveralls.io/repos/github/blairg/hapi-socket-react-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/blairg/hapi-socket-react-boilerplate?branch=master) [![Known Vulnerabilities](https://snyk.io/test/github/blairg/hapi-socket-react-boilerplate/badge.svg)](https://snyk.io/test/github/blairg/hapi-socket-react-boilerplate) [![dependencies Status](https://david-dm.org/blairg/hapi-socket-react-boilerplate/status.svg)](https://david-dm.org/blairg/hapi-socket-react-boilerplate) [![devDependencies Status](https://david-dm.org/blairg/hapi-socket-react-boilerplate/dev-status.svg)](https://david-dm.org/blairg/hapi-socket-react-boilerplate?type=dev) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/2fdc21a15a3a4c1480982d0568eeec5a)](https://www.codacy.com/app/blairg/hapi-socket-react-boilerplate?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=blairg/hapi-socket-react-boilerplate&amp;utm_campaign=Badge_Grade) [![CodeFactor](https://www.codefactor.io/repository/github/blairg/hapi-socket-react-boilerplate/badge)](https://www.codefactor.io/repository/github/blairg/hapi-socket-react-boilerplate) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Boilerplate app to get you up and running with Hapi, HTTP/2, Web Sockets and React.

Demo can be found [here](https://hapi-boilerplate-docker.herokuapp.com/index)

## Project Overview 🤓

I've written a [blog article](https://hackerlite.xyz/2017/12/13/boilerplate-for-hapi-js-web-socket-http-2-react-and-redux/) detailing the steps I've gone through to create. Also the good 😇, the bad 👿 and the ugly ☠️.

## Get it running locally 🏌️

Assuming you are on Mac OS 🍏 and Node 8.9.4 or higher installed. Not tested on any other OS.

### Creating Local SSL Certificate Overview 🔒

As this boilerplate uses [HTTPS](https://en.wikipedia.org/wiki/HTTPS), you will need to create a local [SSL (Secure Socket Layer) certificate](https://www.globalsign.com/en/ssl-information-center/what-is-an-ssl-certificate/) and key. If you are not familar with creating an SSL certificate on your Mac, plaese look [here](https://devcenter.heroku.com/articles/ssl-certificate-self).

By following the below steps you will run an [NPM script](https://docs.npmjs.com/misc/scripts) `npm run createCertificate`, which will create an SSL certficate and key for you. It will also move them to the correct folder, to make life as painless as possible for you. In the project there is a folder named `ssl`, in here I have created a [shell script](https://en.wikipedia.org/wiki/Shell_script) named `createCerts.sh`. This is where the magic (told myself this) happens. You are more than welcome to delve in here and see the dark arts of shell scripting if you are unfamilar with this.

### Run project natively (on Mac)

In the terminal run the following: -

* `git clone git@github.com:blairg/hapi-socket-react-boilerplate.git`
* `cd hapi-socket-react-boilerplate`
* Create certificate for HTTPS `npm run createCertificate`. Fill in the questions when asked. Can be fictitious values.
* `npm i`
* `npm run dev`
* In your browser go to `https://localhost:3000/index` (add security exception rule for local cert). Look here for Chrome  chrome://flags/#allow-insecure-localhost.
* 👏

### Run with docker 🐳

Ensure you have created the cert and key as per the previous step.

Assuming you have cloned the repo and installed the packages. Also, that you have Docker and Docker Compose installed too. In the terminal do the following, in the root of the directory you cloned the repo too: -

* Create certificate for HTTPS `npm run createCertificate`. Details are all optional.
* Create an `.env` file, this can be blank as the Dockerfile has default values set.
* `docker-compose up`
* In your browser go to `https://localhost:3000/index` (add security exception rule for local cert).

## Running tests 👩‍🔬👨‍🔬

Following options: -

* To just run the unit tests -> `npm run test`
* To run tests with coverage (Istanbul) -> `npm run test:coverage`. This will output to `coverage` folder. Locate the `index.html` in here and open in your browser.
* To watch tests for changes -> `npm run test:watch`
* In VS Code you have 2 debug options avaiable for tests. `Unit Tests` will execute tests. `Tests with Coverage`, will run tests with coverage.

## Storybook 📚

[For more info](https://storybook.js.org/)

* In the terminal run -> `npm run storybook`
* Build Storybook as a static site -> `npm run storybook:build`

## Linting 🔍

* In the terminal run ESLint with -> `npm run lint`

## Prettier 🙏

* In the terminal run Prettier with -> `npm run pretty`

## Issues 🤒

If you find anything wrong with this repo post them [here please](https://github.com/blairg/hapi-socket-react-boilerplate/issues).

## Contributing

Refer to `CONTRIBUTING.md` in the root of this repo.

## Todo ✍️

I've left myself some work to do. Look in `todo.md`.
