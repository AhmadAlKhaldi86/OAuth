// First passport and googleAuth has to be installed. 
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');
// Import your clientID and Secret in diff file.
const keys = require('./keys.js');


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
  callbackURL: "http://localhost:3000/auth/google/redirect"
}, () => {
  // call back function
}));
