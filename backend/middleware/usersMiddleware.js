var usersMiddleware = function (req, res, next) {
  console.log("Users Middleware");
  next();
};

module.exports = { usersMiddleware };
