var mongoose = require("mongoose");

var MenuSchema = mongoose.Schema ({
    name : {type : String, required : true}
});

module.exports = MenuSchema;