const User = require("../models/user");

module.exports.createUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = new User({ username });
        const registerUser = await User.register(user, password);
        req.json("Successfully created account! ");
    } catch (err) {
        res.json({ err: err.message });
    }
};
