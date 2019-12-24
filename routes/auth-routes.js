const router = require('express').Router();
// import express then create an instance of Router 


// Auth login 
router.get('/login', (req, res)=> {
  res.render('login');
})

// Auth logout 
router.get('/logout', (req, res)=> {
  res.render('user has logged out');
})

// Auth with google
router.get('/google', (req, res) => {
  // passport to handle the process 
  res.send('logging in with google')
})

module.exports = router;
// created an instance , attached routes, exported it. 
// Once exported in app.js we need to import it. 