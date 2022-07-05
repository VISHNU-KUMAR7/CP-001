var express = require("express");
const { usersMiddleware } = require("../middleware/usersMiddleware");
const {
  registerUserController,
  loginUserController,
  profileUserController,
  getIssueByUserController,
} = require("../controller/usersController.js");
var router = express.Router();
router.use("/getIssueByUser", usersMiddleware);

/* GET users listing. */
router.post("/registerUser", registerUserController);
router.post("/loginUser", loginUserController);
router.post("/profileUser", profileUserController);
router.post("/getIssueByUser", getIssueByUserController);

module.exports = router;
