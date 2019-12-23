const express = require('express');

const app = new express();

// setup view engine later will learn 
app.set('view engine', 'ejs');

// setup initial route and render file
// Now app will be looking at a file called home
// app.get('/', (req,  res) => res.send('Hello User')); 
app.get('/', (req, res) => {
  res.render('home');
});

// setup the port number
app.listen(8080, '0.0.0.0');


