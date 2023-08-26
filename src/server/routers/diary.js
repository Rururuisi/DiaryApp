const express = require("express");
const router = express.Router({ mergeParams: true });
const diary = require("../controllers/diary");
const catchAsync = require("../utils/catchAsync");
const multer = require("multer");
const storage = require("../cloudinary");
const upload = multer({ storage });

router.route("/").post(catchAsync(diary.createDiary));

router
    .route("/:diaryId")
    .put(catchAsync(diary.updateDiary))
    .delete(catchAsync(diary.deleteDiary));

module.exports = router;
