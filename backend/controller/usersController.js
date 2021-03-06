var userAPI = require("../api/userAPI");
const registerUserController = (req, res, next) => {
  try {
    userAPI
      .registerUser(req.body)
      .then((data) => res.status(201).send(data))
      .catch((error) => res.status(301).send(error));
  } catch (error) {
    res.status(301).send(error);
  }
};
const loginUserController = (req, res, next) => {
  console.log(req.body);
  try {
    userAPI
      .loginUser(req.body)
      .then((data) => res.status(201).send(data))
      .catch((error) => res.status(301).send(error));
  } catch (error) {
    res.status(301).send(error);
  }
};
const getIssueByUserController = (req, res, next) => {
  try {
    userAPI
      .getIssueByUser()
      .then((data) => res.status(201).send(data))
      .catch((error) => res.status(301).send(error));
  } catch (error) {
    res.status(301).send(error);
  }
};
module.exports = {
  registerUserController,
  loginUserController,
  getIssueByUserController,
};
