const express = require("express");
const router = express.Router();
const user = require("../controllers/user");
const catchAsync = require("../utils/catchAsync");

router.route("/").post(catchAsync(user.getUser));
router.route("/register").post(catchAsync(user.createUser));
router.route("/login").post(catchAsync(user.loginUser));
router.route("/:id").delete(catchAsync(user.deleteUser));

module.exports = router;
