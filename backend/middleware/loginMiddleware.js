var loginMiddleware = function (req, res, next) {
  console.log("Login Middleware");
  next();
};

module.exports = { loginMiddleware };
