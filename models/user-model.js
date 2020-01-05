const mongoose = require('mongoose');

// User profile data structure (schema)
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
  userName: String,

});

// caps u as convention to create a model
const User = mongoose.model('user', userSchema)


// export only the User model
// This will be used in our callBack func so we need to import it there. 
module.exports = User;