var express = require("express");
const { IssuesMiddleware } = require("../middleware/issuesMiddleware");
const {
  getIssueByUserController,
  getAllIssuesController,
  getIssueByIdController,
  getIssuesBySearchController,
  addIssueController,
  updateIssueController,
  deleteIssueController,
  multipleDeleteIssueController,
} = require("../controller/issuesController.js");
var router = express.Router();
router.use(IssuesMiddleware);

/* GET users listing. */
router.get("/getIssueByUser", getIssueByUserController);
router.get("/getAllIssues", getAllIssuesController);
router.get("/getIssueById", getIssueByIdController);
router.get("/getIssuesBySearch", getIssuesBySearchController);
router.post("/addIssue", addIssueController);
router.put("/updateIssue", updateIssueController);
router.delete("/deleteIssue", deleteIssueController);
router.delete("/multipleDeleteIssues", multipleDeleteIssueController);

module.exports = router;
