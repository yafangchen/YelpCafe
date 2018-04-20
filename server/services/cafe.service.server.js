module.exports = function (app) {
    var cafeModel = require("../models/cafe/cafe.model.server");

    app.post("/api/owner/:ownerId/cafe", createCafe);

    app.get("/api/cafe/:cafeId", findCafeById);
    app.put("/api/cafe/:cafeId", updateCafe);
    app.delete("/api/cafe/:cafeId", removeCafe);

    app.get("/api/owner/:ownerId/cafes", findCafesByOwnerId);

    function findCafesByOwnerId(req, res) {
        var ownerId = req.params['ownerId'];
        cafeModel.findCafesByOwnerId(ownerId)
            .then(function (cafes) {
                res.json(cafes);
            })
    }

    function findCafeById(req, res) {
        var cafeId = req.params['cafeId'];
        cafeModel.findCafeById(cafeId)
            .then(function (cafe) {
                res.json(cafe);
            })
    }

    function createCafe(req, res) {
        var cafe = req.body;
        var ownerId = req.params['ownerId'];
        cafe.ownerId = ownerId;
        cafeModel.createCafe(cafe)
            .then(function (cafe) {
                res.json(cafe);
            })
    }

    function updateCafe(req, res) {
        var cafeId = req.params['cafeId'];
        var cafe = req.body;
        cafeModel.updateCafe(cafeId, cafe)
            .then(function (cafe) {
                res.json(cafe);
            })
    }

    function removeCafe(req, res) {
        var cafeId = req.params['cafeId'];
        cafeModel.removeCafe(cafeId)
            .then(function (status) {
                res.json(status);
            })
    }
}

