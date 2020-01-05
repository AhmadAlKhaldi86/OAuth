// First passport and googleAuth has to be installed. 
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');
// Import your clientID and Secret in diff file.
const keys = require('./keys.js');


// Import User model to use it here. 
const User = require('../models/user-model');

//  ----------------  passport setup  ---------------- //
// Here you need clientID and  Secret: You need to register your app in google.
// https://console.developers.google.com/apis


passport.use(new googleStrategy({
  //Options for strategy
  // clientID: keys.google.clientID,
  // clientSecret: keys.google.clientSecret,
  // callbackURL: '/auth/google/redirect'
  clientID: '943201480191-fgsp3quoh9efjf730uv9sfht8l0l3n1g.apps.googleusercontent.com',
  clientSecret: 'xKB_IMK0R-2TPvT7oCoIlGRz',
  callbackURL: "/auth/google/redirect"
  // callbackURL: "http://localhost:3000/auth/google/redirect"
}, (accessToken, refreshToken, profile, done) => {
  // call back function where it will be triggered when the profile info comes-in
  // First we need to tell passport to take code and exchange it for profile info
  // in routes callback URI
  // accessToken from google to do something with userAccount
  // refreshToken to refresh the   access token
  // profile info
  // done called when we are done with call back function.
  User.findOne({googleId: profile.id}).then((currentUser) => {
    if(currentUser) {
      console.log('user is '  + currentUser);
    } else {
      new User({
        googleId: profile.id,
        userName: profile.displayName
      }).save().then((newUser) => {
        console.log(newUser + " has been created");
      })
    }
  })
})
);

//.Save because our module is connected to database through mongoose.
/*
{ _id: 5e0677667f96896e2556afe6,
  googleId: '111309849457342504614',
  userName: 'Ahmad Al Khaldi',
  __v: 0 } has been created
*/