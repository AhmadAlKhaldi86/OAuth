// Import express then create an instance of Router 
const router = require('express').Router();

// Passport object setup to  get google passport object from passport-setup
const passport = require('passport');

// -------------------- Routes ---------------------------//

// Auth login : If you click on login it will take you to login page. 
router.get('/login', (req, res)=> {
  res.render('login');
})

// Auth logout : So far this will only give a  message that user has loggedout. 
router.get('/logout', (req, res)=> {
  res.render('user has logged out');
})


// Once you're in the login page and you hit /google+
// Passport code will talk to google to allow users authenticate using google.
//  Below 'google' is looking into passport.use(new googleStrategy object that we created.
// This will send to the consent screen passport.authenticate('google
router.get('/google', passport.authenticate('google',{ scope: ['profile']}));


// callBack URL handler. if google hits redirect.
// You should see a code= in url that google sends. 
// We use it to interact with google. 
// adding passport.authenticate('google') this way now we have a code coming from google
// But we do not wanna send to the consent screen
// we want to get the code and exchange the profile using pass.auth below
router.get('/google/redirect',  passport.authenticate('google'), (req, res) => {
  res.send('You  reached the callback URL');
});

// created an instance , attached routes, exported it.
// Once exported in app.js we need to import it.  
module.exports = router

