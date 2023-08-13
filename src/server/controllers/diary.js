const Diary = require("../models/diary");

module.exports.index = async (req, res) => {
    const diaries = await Diary.find({});
    res.json(diaries);
};

module.exports.createDiary = async (req, res) => {
    const diary = new Diary(req.body);
    await diary.save();
    res.json(diary);
};

module.exports.updateDiary = async (req, res) => {
    const { id } = req.params;
    const diary = await Diary.findByIdAndUpdate(id, { ...req.body });
    await diary.save();
    const returnDiary = await Diary.findById(id);
    res.json(returnDiary);
};

module.exports.deleteDiary = async (req, res) => {
    const { id } = req.params;
    const diary = await Diary.findByIdAndDelete(id);
    res.json("Deleted successfully! ");
};
