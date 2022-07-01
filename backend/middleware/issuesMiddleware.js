const jwt = require("jsonwebtoken");
const IssuesMiddleware = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    req.token = bearerHeader.split(" ")[1];
    jwt.verify(req.token, process.env.JWT_KEY, (e, Data) => {
      console.log(Data);
      if (e) {
        res.status(401).send({ result: e });
      } else {
        next();
      }
    });
  } else {
    res.status(401).send({ result: "Token not Provided" });
  }
};
module.exports = { IssuesMiddleware };
