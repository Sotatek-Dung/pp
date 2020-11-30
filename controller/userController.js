var UserModel = require('../Models/userModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;
module.exports = {
    signUp(req,res,next){
        bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
            console.log('hash', hash);
            UserModel.create({ email: req.body.email, password: hash }).then((result) => {
              console.log(result,'...');
              res.json(result);
            }).catch((err) => {
              res.json(err)
            });
          });
}}