var mongoose = require("mongoose");

var MenuSchema = mongoose.Schema ({
    cafeId : {type: mongoose.Schema.Types.ObjectId, required : true},
    name : {type : String, required : true},
    price: String,
    description: String,
    image: String
}, {collection: "menu" });

module.exports = MenuSchema;