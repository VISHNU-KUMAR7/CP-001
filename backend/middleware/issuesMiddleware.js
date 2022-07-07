const jwt = require("jsonwebtoken");
const issueAPI = require("../api/issueAPI");
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
const userByIssue = (req, res, next) => {
  console.log("this is from middleware", req.body);
  if (req.body.cat === "admin") {
    console.log("this is admin");
    try {
      issueAPI
        .getIssueByAdmin(req.body)
        .then((data) => res.status(200).send(data))
        .catch((error) => res.status(400).send(error));
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  } else {
    next();
  }

  // this is used to check the given email Id is admin or not
  // 1st fetch the eMail, 2nd call the usersSchema to check the cat of same eMail.
  // 3rd from 2nd I will get cat of eMail
  // 4th I have a question that how will I know whether end-user click "login" or "login as Admin"
  // so this process is flop.
  // from here I move to login.js page and add 2 button with value "user" and "admin"
};
module.exports = { IssuesMiddleware, userByIssue };
