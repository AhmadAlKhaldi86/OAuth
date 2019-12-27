// Require express and create an app instance 
const express = require('express');
const app = new express();
// Import the routes from another dir/file
const authRoutes = require('../routes/auth-routes.js');
// Need to do this to be able to run that file. 
const passportSetup = require('../config/passport-setup');

// -------------- app setup ------------------//
// setup view engine to render the webpage.
// ejs has to  be installed.
app.set('view engine', 'ejs');

// After import , we want our instance to use the routes.
// Now you can use the routes using app.use method. 
app.use('/auth', authRoutes);


// ---------------- page --------------------//

// Now app will be looking at a file called home under views.
app.get('/', (req, res) => {
  res.render('home');
});

// setup the port number
app.listen(3000, '0.0.0.0');


