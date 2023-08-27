const Diary = require("../models/diary");
const User = require("../models/user");

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
    const updateDiary = await Diary.findByIdAndUpdate(diaryId, { ...diary });
    await updateDiary.save();
    const returnDiary = await Diary.findById(diaryId);
    res.json(returnDiary);
};

module.exports.deleteDiary = async (req, res) => {
    const { userId, diaryId } = req.params;
    await Diary.findByIdAndDelete(diaryId);
    await User.findByIdAndUpdate(userId, { $pull: { diaries: diaryId } });
    res.json("Deleted successfully! ");
};
