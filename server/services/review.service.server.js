module.exports = function (app) {
    var reviewModel = require("../models/review/review.model.server");

    app.get("/api/review/:reviewId", findReviewById);
    app.put("/api/review/:reviewId", updateReview);
    app.delete("/api/review/:reviewId", deleteReview);

    app.post("/api/review", createReview);
    app.get("/api/cafe/:cafeId/reviews", findReviewsByCafeId);
    app.get("/api/user/:userId/reviews", findReviewsByUserId);

    function findReviewById(req, res) {
        var reviewId = req.params['reviewId'];
        reviewModel.findReviewById(reviewId).then(
            function (review) {
                res.json(review);
            }
        );
    }
    function updateReview(req, res) {
        var reviewId = req.params['reviewId'];
        var review = req.body;
        reviewModel.updateReview(reviewId, review).then(
            function (review) {
                res.json(review);
            }
        );
    }
    function deleteReview(req, res) {
        var reviewId = req.params['reviewId'];
        reviewModel.removeReview(reviewId)
            .then(function (status) {
                res.json(status);
            })
    }
    function createReview(req, res) {
        var review = req.body;
        var cafeId = req.query['cafeId'];
        var userId = req.query['userId'];
        review.cafeId = cafeId;
        review.userId = userId;
        reviewModel.createReview(review).then(
            function (review) {
                res.json(review);
            }
        );
    }
    function findReviewsByCafeId(req, res) {
        var cafeId = req.params['cafeId'];
        reviewModel.findReviewsByCafeId(cafeId).then(
            function (reviews) {
                res.json(reviews);
            }
        );
    }
    function findReviewsByUserId(req, res) {
        var userId = req.params['userId'];
        reviewModel.findReviewsByUserId(userId).then(
            function (reviews) {
                res.json(reviews);
            }
        );
    }
}

