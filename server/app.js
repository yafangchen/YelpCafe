module.exports = function(app) {
  require("./models/model.js");
  require("./services/cafe.service.server.js")(app);
  require("./services/review.service.server.js")(app);
  require("./services/menu.service.server.js")(app);
  require("./services/user.service.server.js")(app);
};

