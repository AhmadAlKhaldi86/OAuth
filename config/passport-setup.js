// This will work only if installed pass and google-oauth
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');
// Import your clientID and Secret in diff file.
const keys = require('./keys.js');

passport.use(new googleStrategy({
  //Options for strategy
  clientID: keys.google.clientID,
  clientSecret: keys.google.clientSecret
}), () => {
  // call back function
});

// First you need clientID and ClientSecret. 
// https://console.developers.google.com/apis   to get above. 
// In google create a project oauth and enable APIs . 
// look for google+ and enable it.
// You will get To use this API, you may need credentials. Click 'Create credentials' to get started.
// Create creds for oauth client id
// 943201480191-fgsp3quoh9efjf730uv9sfht8l0l3n1g.apps.googleusercontent.com
// xKB_IMK0R-2TPvT7oCoIlGRz

