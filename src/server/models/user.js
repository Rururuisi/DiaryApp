const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
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

userSchema.plugin(uniqueValidator);
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
