const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  login: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  isAdmin:{
      type:Boolean
  }
});

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;