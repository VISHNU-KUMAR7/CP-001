var adminMiddleware = function (req, res, next) {
  console.log("Admin Middleware");
  next();
};

module.exports = { adminMiddleware };
