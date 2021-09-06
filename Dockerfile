FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install

COPY . /usr/src/app

EXPOSE 3000

CMD [ "npm", "start" ]

--> See Digitalocean anleitung (kein extra container für txt file sondern teil des backends machen!)