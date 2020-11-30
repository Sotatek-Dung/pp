const express = require('express');
const router = express.Router();
var UserModel = require('../Models/userModel');
var { validate } = require('../middleware/validator');
var { signUp } = require('../controller/userController')
const bcrypt = require('bcrypt');
const saltRounds = 10;


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/* GET user profile. */
router.get('/profile', function (req, res, next) {
  res.send(req.user);
});

router.post('/signup', validate, signUp)

module.exports = router;