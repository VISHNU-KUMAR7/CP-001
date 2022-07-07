var userAPI = require("../api/userAPI");

var usersMiddleware = function (req, res, next) {
  console.log("Users Middleware");
  next();
};
var totalIssueByUserMiddleware = function (req, res, next) {
  if (req.body.cat === "admin") {
    try {
      userAPI
        .totalIssueByAdmin(req.body)
        .then((data) => res.status(201).send(data))
        .catch((e) => res.status(201).send(e));
    } catch (e) {
      res.status(301).send(e);
    }
  } else {
    next();
  }
};

module.exports = { usersMiddleware, totalIssueByUserMiddleware };
