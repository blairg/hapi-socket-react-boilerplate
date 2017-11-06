FROM node:8.9.0-alpine

COPY ./src /usr/app/src
COPY ./public/css/ /usr/app/public/css
COPY webpack.config.js package.json package-lock.json /usr/app/
COPY ./ssl/cert.key ./ssl/cert.pem /usr/app/ssl/

WORKDIR /usr/app

RUN npm i

EXPOSE 3000

CMD [ "npm", "start" ]
