const express = require("express");
const router = express.Router();
const diary = require("../controllers/diary");
const catchAsync = require("../utils/catchAsync");

router.route("/").get(catchAsync(diary.index));

router.route("/new").post(catchAsync(diary.createDiary));

router
    .route("/:id")
    .put(catchAsync(diary.updateDiary))
    .delete(catchAsync(diary.deleteDiary));

module.exports = router;
