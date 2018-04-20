var mongoose = require("mongoose");
var ReviewSchema = require("./review.schema.server");
var ReviewModel = mongoose.model('ReviewModel', ReviewSchema);

ReviewModel.findReviewsByCafeId = findReviewsByCafeId;
ReviewModel.findReviewsByUserId = findReviewsByUserId;
ReviewModel.findReviewById = findReviewById;
ReviewModel.updateReview = updateReview;
ReviewModel.createReview = createReview;
ReviewModel.removeReview = removeReview;

module.exports = ReviewModel;

function findReviewsByCafeId(cafeId) {
    return ReviewModel.find({"cafeId": cafeId});
}

function findReviewsByUserId(userId) {
    return ReviewModel.find({"userId": userId});
}

function findReviewById(reviewId) {
    return ReviewModel.find({"_id": reviewId});
}

function updateReview(reviewId, review) {
    return ReviewModel.update({"_id": reviewId}, {
        $set: {
            content: review.content
        }
    });
}

function createReview(review) {
    return ReviewModel.create(review).then(
        function (respReview) {
            return respReview;
        }
    );
}

function removeReview(reviewId) {
    return ReviewModel.remove({"_id": reviewId});
}