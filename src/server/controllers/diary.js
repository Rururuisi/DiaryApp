const Diary = require("../models/diary");

module.exports.index = async (req, res) => {
    const diaries = await Diary.find({});
    res.json(diaries);
};

module.exports.createDiary = async (req, res) => {
    const diary = new Diary(req.body);
    await diary.save();
    res.json("Diary Created!");
};
