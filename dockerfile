# with docker you can inherint files 
FROM node:latest

WORKDIR /app

COPY . /app

RUN npm install

CMD node src/index.js