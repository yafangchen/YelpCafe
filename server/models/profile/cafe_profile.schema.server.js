var mongoose = require("mongoose");
var menuSchema = require("../menu/menu.schema.server");
var reviewSchema = require("../review/review.schema.server");

var CafeProfileSchema = mongoose.Schema ({
    userId: String,
    name : {type : String, required : true},
    address : String,
    open_hour : String,
    menu: [menuSchema],
    reviews: [reviewSchema],
    image: Array
}, {collection: "cafe_profile" });

module.exports = CafeProfileSchema;
