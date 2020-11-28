FROM node:10

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

EXPOSE 3000

RUN npm install

CMD [ "npm", "start" ]