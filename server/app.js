module.exports = function(app) {
  require("./models/model.js");
  require("./services/cafe_profile.service.server.js")(app);
};

