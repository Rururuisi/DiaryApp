const express = require("express");
const router = express.Router();
const diary = require("../controllers/diary");

router.route("/").get(diary.index);

router.route("/new").post(diary.createDiary);

router.route("/:id").put(diary.updateDiary);

module.exports = router;
