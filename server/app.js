module.exports = function(app) {
  require("./models/model.js");
  require("./services/cafe.service.server.js")(app);
};

