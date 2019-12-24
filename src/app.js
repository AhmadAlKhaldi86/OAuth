const express = require('express');
// Import the routes from another dir
const authRoutes = require('../routes/auth-routes.js');

const app = new express();


// setup view engine later will learn 
app.set('view engine', 'ejs');

// Now you can use the routes using app.use method. 
app.use('/auth', authRoutes);


// setup initial route and render file
// Now app will be looking at a file called home
// app.get('/', (req,  res) => res.send('Hello User')); 
app.get('/', (req, res) => {
  res.render('home');
});

// setup the port number
app.listen(3000, '0.0.0.0');


