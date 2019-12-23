const express = require('express');

const app = new express();

app.get('/', (req,  res) => res.send('Hello User')); 

app.listen(8080, '0.0.0.0');

// All above should run  without docker just run node index.js 
// Make sure npm/node and express are installed.
// docker build -t nodeexpress .
// oauth docker run -p 3000:8080 -d nodeexpress
// http://localhost:3000/
// docker copntainer ls 
// docker container stop 9e13d736c9d2