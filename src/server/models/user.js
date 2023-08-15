const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },
    hash: {
        type: String,
        require: true,
    },
    displayName: String,
    email: String,
    avatar: {
        url: String,
        filename: String,
    },
    profileBG: {
        url: String,
        filename: String,
    },
    diaries: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Diary",
        },
    ],
});

userSchema.plugin(uniqueValidator, { message: "Username already exists!" });

module.exports = mongoose.model("User", userSchema);
