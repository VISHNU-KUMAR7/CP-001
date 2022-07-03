var issueAPI = require("../api/issueAPI");

const getIssueByUserController = (req, res, next) => {
  console.log(req.body);
  try {
    issueAPI
      .getIssueByUser(req.body)
      .then((data) => res.status(200).send(data))
      .catch((error) => res.status(400).send(error));
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const getAllIssuesController = function (req, res, next) {
  try {
    issueAPI
      .getAllIssues(req.body)
      .then((data) => res.status(200).send(data))
      .catch((error) => res.status(400).send(error));
  } catch (error) {
    res.status(400).send(error);
  }

  // res.status(200).send("Getting All Issues");
};

const getIssueByIdController = function (req, res, next) {
  try {
    issueAPI
      .getIssueById(req.body)
      .then((data) => res.status(200).send(data))
      .catch((error) => res.status(400).send(error));
  } catch (error) {
    res.status(400).send(error);
  }
  // res.status(200).send("Getting Issue By Id");
};
const getIssuesBySearchController = function (req, res, next) {
  issueAPI
    .getIssuesBySearch(req.body)
    .then((data) => res.status(200).send(data))
    .catch((error) => res.status(400).send(error));
  // res.status(200).send("Getting All Issues");
};

const addIssueController = (req, res, next) => {
  try {
    issueAPI
      .addIssue(req.body)
      .then((data) => res.status(201).send(data))
      .catch((error) => res.status(400).send(error));
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateIssueController = (req, res, next) => {
  try {
    issueAPI
      .updateIssue(req.body)
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  } catch (error) {
    res.status(400).send(error);
  }
  // res.status(201).send("Issues Updated");
};
const deleteIssueController = (req, res, next) => {
  try {
    issueAPI
      .deleteIssue(req.body)
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  } catch (error) {
    res.status(400).send(error);
  }
  // res.status(201).send("Issues Delete");
};
const multipleDeleteIssueController = (req, res, next) => {
  try {
    issueAPI
      .multipleDeleteIssue(req.body)
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  } catch (error) {
    res.status(400).send(error);
  }
  // res.status(201).send("Multiple Issues Deleted");
};

module.exports = {
  getIssueByUserController,
  getAllIssuesController,
  getIssueByIdController,
  addIssueController,
  getIssuesBySearchController,
  updateIssueController,
  deleteIssueController,
  multipleDeleteIssueController,
};
