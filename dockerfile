# with docker you can inherint other images 
FROM node:latest

WORKDIR /app

COPY . /app

RUN npm install

CMD node src/app.js