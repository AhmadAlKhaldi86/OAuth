# OAuth test project with passwordjs.

#### This application is to test running an application OAUTH scheme authentication.
#### We will be using passport.js
#### We will be hosting the application in docker container.

### Usage:
- Make sure npm/node and express are installed.
- Pull this repo and run following to build the image --> docker build -t nodeexpress .
- Run the container --> docker run -p 3030:8080 -d nodeexpress
- Open in  chrome --> http://localhost:3000/
- to stop the application RUN --> docker copntainer THEN docker container stop 9e13d736c9d2
