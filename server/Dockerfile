FROM node:12.18.3

LABEL version="1.0"
LABEL description="This is the base docker image for the Deepc Fish Name Generator backend API."
LABEL maintainer = ["patrick.remerscheid@gmail.com"]

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install 

COPY . .

#EXPOSE 5000

CMD ["node", "server.js"]