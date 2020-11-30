var UserModel = require('../Models/userModel');
module.exports = {
    validate(req,res,next){
        if (req.body.password.length < 6) {
            return res.json('password phai >= 6 ky tu')
          }
          UserModel.findOne({ email: req.body.email }).then((result) => {
            if (!result) {
              return next()
            } else {
              res.json('tk nay da ton tai')
            }
          }).catch((err) => {
            console.log(err);
          });
}}