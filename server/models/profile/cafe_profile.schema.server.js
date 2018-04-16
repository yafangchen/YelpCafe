var mongoose = require("mongoose");
var menuSchema = require("../menu/menu.schema.server");
var reviewSchema = require("../review/review.schema.server");

var CafeProfileSchema = mongoose.Schema ({
    cafeProfileId : mongoose.Schema.Types.ObjectId,
    name : {type : String, required : true},
    address : String,
    open_hour : String,
    menus: [menuSchema],
    reviews: [reviewSchema],
    image: Array
}, {collection: "cafe_profile" });

module.exports = CafeProfileSchema;
