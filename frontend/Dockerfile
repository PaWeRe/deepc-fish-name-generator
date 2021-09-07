FROM node:latest

LABEL version="1.0"
LABEL description="This is the base docker image for the Deepc Fish Name Generator frontend react app."
LABEL maintainer = ["patrick.remerscheid@gmail.com"]

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]