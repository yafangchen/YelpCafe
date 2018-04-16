var mongoose = require("mongoose");

var ReviewSchema = mongoose.Schema ({
    reviewId : mongoose.Schema.Types.ObjectId,
    user : {type : String, required : true},
    content: String
});

module.exports = ReviewSchema;