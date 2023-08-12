const mongoose = require("mongoose");

const weather = [
    "sunny",
    "sunnyWithCloud",
    "rainyWithSun",
    "cloudy",
    "rainy",
    "rainyWithLightning",
    "cloudWithLightning",
    "rainbow",
    "windy",
    "foggy",
    "snowy",
];

const diarySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    last_modified_time: {
        type: String,
        required: true,
    },
    weather: {
        type: String,
        enum: weather,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //     required: true,
    // },
});

module.exports = mongoose.model("Diary", diarySchema);
