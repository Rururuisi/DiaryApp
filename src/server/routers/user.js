const express = require("express");
const router = express.Router();
const user = require("../controllers/user");
const catchAsync = require("../utils/catchAsync");

router.route("/").post(catchAsync(user.createUser));

module.exports = router;
