const mongoose = require('mongoose');
const validator = require('validator');
<<<<<<< HEAD
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
=======

var User = mongoose.model('User', {
>>>>>>> 33a28f822a1fdd8c4f56244471ee61a6dcae2a89
  email : {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{value} is not a valid email'
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
})

<<<<<<< HEAD
UserSchema.methods.toJSON = function () {
	var user = this;
	var userObject = user.toObject();

	return _.pick(userObject, ['_id', 'email']);
}

UserSchema.methods.generateAuthToken = function () {
	var user = this;
	var access = 'auth';
	var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

	user.tokens.push({access, token});

	return user.save().then(() => {
		return token;
	})
};


var User = mongoose.model('User', UserSchema);

=======
>>>>>>> 33a28f822a1fdd8c4f56244471ee61a6dcae2a89
module.exports = {
  User
}
