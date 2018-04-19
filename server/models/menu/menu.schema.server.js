var mongoose = require("mongoose");

var MenuSchema = mongoose.Schema ({
    cafeId: String,
    name : {type : String, required : true},
    price: String,
    description: String,
    image: String
});

module.exports = MenuSchema;