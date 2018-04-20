module.exports = function (app) {
    var userModel = require("../models/user/user.model.server");

    app.get("/api/user/all", findAllUser);

    app.post("/api/user", createUser);
    app.get("/api/user", findUser);

    app.get("/api/user/:userId", findUserById);
    app.put("/api/user/:userId", updateUser);
    app.delete("/api/user/:userId", deleteUser);

    function createUser(req, res) {
        var newUser = req.body;
        userModel.createUser(newUser)
            .then(function(user) {
                res.json(user);
            })
    }

    function findAllUser(req, res) {
        userModel.findAllUsers()
            .then(function(user){
                res.json(user);
            });
    }

    function findUser(req, res) {
        var username = req.query["username"];
        var password = req.query["password"];
        if (username && password){
            userModel.findUserByCredentials(username, password)
                .then(function(user) {
                    res.json(user);
                })
        }
    }

    function findUserById(req, res){
        var userId = req.params["userId"];
        userModel.findUserById(userId)
            .then(function(user) {
                res.json(user);
            })
    }

    function updateUser(req, res) {
        var userId = req.params['userId'];
        var user = req.body;

        userModel.updateUser(userId, user)
            .then(function(status) {
                res.send(status);
            })
    }

    function deleteUser(req, res) {
        var userId = req.params["userId"];
        userModel.deleteUser(userId)
            .then(function(status) {
                res.send(status);
            })
    }
}
