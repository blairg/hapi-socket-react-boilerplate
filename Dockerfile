FROM node:8.9.1-alpine

ENV PROD ${PROD}

COPY ./src /usr/app/src
COPY ./public/ /usr/app/public/
COPY webpack.client.config.js webpack.client.prod.config.js webpack.server.config.js package.json package-lock.json /usr/app/

COPY ./node_modules/ /usr/app/node_modules/
COPY ./dist/ /usr/app/dist/

WORKDIR /usr/app

EXPOSE 3000

CMD [ "npm", "start" ]
