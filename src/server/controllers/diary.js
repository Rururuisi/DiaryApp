const Diary = require("../models/diary");
const User = require("../models/user");

module.exports.createDiary = async (req, res) => {
    const { userId } = req.params;
    const diary = new Diary(req.body);
    await diary.save();
    const user = await User.findById(userId);
    user.diaries.push(diary);
    await User.findByIdAndUpdate(userId, user);
    res.json(diary);
};

module.exports.updateDiary = async (req, res) => {
    const { diaryId } = req.params;
    const diary = await Diary.findByIdAndUpdate(diaryId, { ...req.body });
    await diary.save();
    const returnDiary = await Diary.findById(diaryId);
    res.json(returnDiary);
};

module.exports.deleteDiary = async (req, res) => {
    const { userId, diaryId } = req.params;
    await Diary.findByIdAndDelete(diaryId);
    await User.findByIdAndUpdate(userId, { $pull: { diaries: diaryId } });
    res.json("Deleted successfully! ");
};
