module.exports = function (app) {
    var userModel = require("../models/user/user.model.server");
    var passport = require('passport');
    var LocalStrategy = require('passport-local').Strategy;
    var FacebookStrategy = require('passport-facebook').Strategy;
    var bcrypt = require("bcrypt-nodejs");

    var facebookConfig = {
        //clientID: process.env.FB_CLIENT_ID,
        clientID: '123',
        clientSecret: process.env.FB_CLIENT_SECRET,
        callbackURL: process.env.FB_CALLBACK_URL
    };

    app.get("/api/user/all", findAllUser);

    app.post("/api/user", createUser);
    app.get("/api/user", findUser);

    app.get("/api/user/:userId", findUserById);
    app.put("/api/user/:userId", updateUser);
    app.delete("/api/user/:userId", deleteUser);

    app.post('/api/login', passport.authenticate('local'), login);
    app.post('/api/logout', logout);
    app.post ('/api/register', register);
    app.post ('/api/loggedin', loggedin);

    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/user/',
            failureRedirect: '/login'
        }));
    app.get ('/facebook/login', passport.authenticate('facebook', { scope : 'email' }));

    passport.use(new LocalStrategy(localStrategy));
    passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));
    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);

    function loggedin(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    }

    function register (req, res) {
        var user = req.body;
        user.password = bcrypt.hashSync(user.password);
        userModel
            .findUserByUserName(user.username)
            .then(function (data) {
                if (data) {
                    res.status(400).send('Username is in use!');
                    return;
                } else {
                    userModel
                        .createUser(user)
                        .then(
                            function (user) {
                                if (user) {
                                    req.login(user, function (err) {
                                        if (err) {
                                            res.status(400).send(err);
                                        } else {
                                            res.json(user);
                                        }
                                    });
                                }
                            }
                        );
                }
            });
    }

    function login(req, res) {
        var user = req.user;
        res.json(user);
    }

    function logout(req, res) {
        req.logOut();
        res.sendStatus(200);
    }


    function localStrategy(username, password, done) {
        userModel
            .findUserByUserName(username)
            .then(
                function(user) {
                    if(user != null && bcrypt.compareSync(password, user.password)) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                },
                function(err) {
                    if (err) { return done(err); }
                }
            );
    }

    function facebookStrategy(token, refreshToken, profile, done) {
        userModel
            .findUserByFacebookId(profile.id)
            .then(
                function(user) {
                    if(user) {
                        return done(null, user);
                    } else {
                        var names = profile.displayName.split(" ");
                        var newFacebookUser = {
                            username: 'username',
                            lastName: names[1],
                            firstName: names[0],
                            email: profile.emails ? profile.emails[0].value : "",
                            facebook: {
                                id: profile.id,
                                token: token
                            }
                        };
                        return userModel.createUser(newFacebookUser)
                            .then(function(user) {
                                userId = user._id;
                            });
                    }
                },
                function(err) {
                    if (err) { return done(err); }
                }
            )
            .then(
                function(user){
                    return done(null, user);
                },
                function(err){
                    if (err) { return done(err); }
                }
            );
    }

    function serializeUser(user, done) {
        done(null, user);
    }

    function deserializeUser(user, done) {
        userModel
            .findUserById(user._id)
            .then(
                function(user){
                    done(null, user);
                },
                function(err){
                    done(err, null);
                }
            );
    }

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
