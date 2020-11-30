var mongoose = require('../configdb/dbconnect')
var Schema = mongoose.Schema
var userSchema = new Schema({
    email: String,
    password: String
})
module.exports = mongoose.model("user", userSchema);