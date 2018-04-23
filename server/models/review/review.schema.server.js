var mongoose = require("mongoose");

var ReviewSchema = mongoose.Schema ({
    userId: {type: mongoose.Schema.Types.ObjectId, required : true},
    cafeId: {type: mongoose.Schema.Types.ObjectId, required : true},
    content: String
}, {collection: "review" });

module.exports = ReviewSchema;