FROM node:alpine

RUN mkdir -p /usr/app/src
WORKDIR /usr/app/src
COPY ./src /usr/app/src
COPY package.json package-lock.json .babelrc /usr/app/
WORKDIR /usr/app

RUN npm i

EXPOSE 3000

CMD [ "npm", "run", "start" ]
