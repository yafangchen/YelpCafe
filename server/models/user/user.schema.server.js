var mongoose = require("mongoose");

var UserSchema = mongoose.Schema ({
    username : {type : String, required : true},
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    role: String,
    facebook : {
        token: String,
        id: String,
        displayName : String
    }
}, {collection: "user" });

module.exports = UserSchema;