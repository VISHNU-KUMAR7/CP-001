var registerMiddleware = function (req, res, next) {
  console.log("Register Middleware");
  next();
};

module.exports = { registerMiddleware };
