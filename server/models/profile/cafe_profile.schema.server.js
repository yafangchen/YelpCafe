var mongoose = require("mongoose");
var menuSchema = require("../menu/menu.schema.server");
var reviewSchema = require("../review/review.schema.server");

var CafeProfileSchema = mongoose.Schema ({
    userId: {type: mongoose.Schema.Types.ObjectId, required : true},
    name : {type : String, required : true},
    address : String,
    open_hour : String,
    phone: String,
    menus: [menuSchema],
    reviews: [reviewSchema],
    images: Array
}, {collection: "cafe_profile" });

module.exports = CafeProfileSchema;
