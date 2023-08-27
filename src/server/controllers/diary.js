const Diary = require("../models/diary");
const User = require("../models/user");
const { cloudinary } = require("../cloudinary");

module.exports.createDiary = async (req, res) => {
    const { userId } = req.params;
    const diary = new Diary(JSON.parse(req.body.diary));
    diary.images = req.files.map((image) => ({
        url: image.path,
        filename: image.filename,
    }));
    await diary.save();
    const user = await User.findById(userId);
    user.diaries.push(diary);
    await User.findByIdAndUpdate(userId, user);
    res.json(diary);
};

module.exports.updateDiary = async (req, res) => {
    const { diaryId } = req.params;
    const diary = JSON.parse(req.body.diary);
    const removeImages = JSON.parse(req.body.removeImages);
    const updateDiary = await Diary.findByIdAndUpdate(diaryId, { ...diary });
    updateDiary.images.push(
        ...req.files.map((image) => ({
            url: image.path,
            filename: image.filename,
        }))
    );
    await updateDiary.save();
    if (removeImages.length > 0) {
        for (let filename of removeImages) {
            await cloudinary.uploader.destroy(filename);
        }
        await updateDiary.updateOne({
            $pull: { images: { filename: { $in: removeImages } } },
        });
    }
    const returnDiary = await Diary.findById(diaryId);
    res.json(returnDiary);
};

module.exports.deleteDiary = async (req, res) => {
    const { userId, diaryId } = req.params;
    const diary = await Diary.findByIdAndDelete(diaryId);
    await User.findByIdAndUpdate(userId, { $pull: { diaries: diaryId } });
    for (let img of diary.images) {
        if (img.url.includes("cloudinary")) {
            await cloudinary.uploader.destroy(img.filename);
        }
    }
    res.json("Deleted successfully! ");
};
