const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Diary = require("./diary");

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
    intro: String,
    created_date: {
        type: String,
        require: true,
    },
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

userSchema.post("findOneAndDelete", async function (doc) {
    if (doc) {
        await Diary.deleteMany({
            _id: {
                $in: doc.diaries,
            },
        });
    }
});

userSchema.plugin(uniqueValidator, { message: "Username already exists!" });

module.exports = mongoose.model("User", userSchema);
