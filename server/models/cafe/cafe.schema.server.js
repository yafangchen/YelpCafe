var mongoose = require("mongoose");

var CafeSchema = mongoose.Schema ({
    ownerId: {type: mongoose.Schema.Types.ObjectId, required : true},
    name : String,
    address : String,
    openHour : String,
    phone: String,
    images: Array
}, {collection: "cafe" });

module.exports = CafeSchema;
