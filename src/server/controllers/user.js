const User = require("../models/user");
const bcrypt = require("bcrypt");

const saltRounds = 12;

module.exports.getUser = async (req, res) => {
    const { username } = req.body;
    const user = await User.findOne({ username }).populate("diaries");
    if (!user) {
        return res.json({ err: "User does not exist!" });
    }
    res.json(user);
};

module.exports.createUser = async (req, res) => {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, saltRounds);
    const user = new User({ username, hash });
    try {
        await user.save();
    } catch (err) {
        return res.json({ err: "Username already exists!" });
    }
    res.json(user);
};

module.exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        return res.json({ err: "User does not exist!" });
    }
    const isValid = await bcrypt.compare(password, user.hash);
    if (isValid) {
        res.json(user);
    } else {
        res.json({ err: "Incorrect password!" });
    }
};
