FROM node:10

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

EXPOSE 8080

RUN npm install

CMD [ "npm", "start" ]