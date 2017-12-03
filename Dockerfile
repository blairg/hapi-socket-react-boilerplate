FROM node:8.9.1-alpine

ARG PROD=0
ENV PROD=${PROD}

ARG HOST=0.0.0.0
ENV HOST=${HOST}

ARG SOCKET_URL=wss://localhost:3000
ENV SOCKET_URL=${SOCKET_URL}

ARG BUILD_ENV=build:dev
ENV BUILD_ENV=${BUILD_ENV}

COPY ./src /usr/app/src
COPY ./public/ /usr/app/public/
COPY webpack.client.config.js webpack.client.prod.config.js webpack.server.config.js package.json package-lock.json /usr/app/

RUN echo "Build env ${BUILD_ENV}" ${BUILD_ENV}
RUN echo "Prod env ${PROD}" ${PROD}

WORKDIR /usr/app

RUN npm i && \
    npm run ${BUILD_ENV}

EXPOSE 3000

CMD [ "npm", "start" ]
