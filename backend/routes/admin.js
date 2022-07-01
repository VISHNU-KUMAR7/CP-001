var express = require("express");
const { adminLogin } = require("../controller/adminController");
const { adminMiddleware } = require("../middleware/adminMiddleware");
var router = express.Router();

//middleware
router.use(adminMiddleware);

/* GET home page. */
router.get("/", adminLogin);

module.exports = router;
