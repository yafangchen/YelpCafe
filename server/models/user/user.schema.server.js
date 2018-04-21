var mongoose = require("mongoose");

var UserSchema = mongoose.Schema ({
    username : {type : String, required : true},
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    role: String,
}, {collection: "user" });

module.exports = UserSchema;