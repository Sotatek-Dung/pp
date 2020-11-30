const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const bcrypt = require('bcrypt');
var UserModel = require('../Models/userModel')
const LocalStrategy = require('passport-local').Strategy;
/* POST login. */
router.post('/login', passport.authenticate('local', {
  successRedirect: '/private',
  failureRedirect: '/fail'
}))
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
  function (email, password, cb) {
    return UserModel.findOne({ email }).lean()
      .then(data => {
        bcrypt.compare(password, data.password, function (err, result) {
          if (!result) {
            return cb(null, false, { message: 'Incorrect email or password.' });
          }
          return cb(null, data, {
            message: 'Logged In Successfully'
          });
        });
      })
      .catch(err => cb(err));
  }
));

passport.serializeUser(function (user, cb) {
  cb(null, user._id)
})
passport.deserializeUser(function (id, cb) {
  return UserModel.findOne({ _id: id }).then((result) => {
    if (!result) {
      cb(null, false)
    }
    cb(null, user)
  }).catch((err) => {

  });
})
module.exports = router;