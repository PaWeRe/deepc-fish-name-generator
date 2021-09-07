FROM node:12.18.3

LABEL version="1.0"
LABEL description="This is the base docker image for the Deepc Fish Name Generator backend API."
LABEL maintainer = ["patrick.remerscheid@gmail.com"]

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install 

COPY . .

EXPOSE 5000

CMD ["node", "server.js"]


#FROM node:10-alpine

#RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

#WORKDIR /home/node/app

#COPY ./backend ./backend
#COPY ./frontend ./frontend

#RUN cd frontend/ && npm install && cd ..
#RUN cd backend/ && npm install && cd .. 

#USER node

#COPY --chown=node:node . .

#EXPOSE 8080

#CMD [ "node", "server.js" ]