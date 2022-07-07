var express = require("express");
const {
  usersMiddleware,
  totalIssueByUserMiddleware,
} = require("../middleware/usersMiddleware");
const {
  registerUserController,
  loginUserController,
  profileUserController,
  getIssueByUserController,
  totalIssueByUserController,
} = require("../controller/usersController.js");
var router = express.Router();
// router.use("/getIssueByUser", usersMiddleware);
router.use("/totalIssueByUser", totalIssueByUserMiddleware);

/* GET users listing. */
router.post("/registerUser", registerUserController);
router.post("/loginUser", loginUserController);
router.post("/profileUser", profileUserController);
router.post("/getIssueByUser", getIssueByUserController);
router.post("/totalIssueByUser", totalIssueByUserController);

module.exports = router;
