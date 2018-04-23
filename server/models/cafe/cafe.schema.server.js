var mongoose = require("mongoose");

var CafeSchema = mongoose.Schema ({
    ownerId: {type: mongoose.Schema.Types.ObjectId, required : true},
    placeId: String,
    name: String,
    address: String,
    openHour: String,
    phone: String,
    priceLevel: String,
    rating: String,
    isOpen: Boolean,
    weekdayText: Array,
    icon: String,
    avatar: String,
    photos: Array
}, {collection: "cafe" });

module.exports = CafeSchema;
