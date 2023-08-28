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

const ImageSchema = new mongoose.Schema({
    url: String,
    filename: String,
});

const DiarySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    created_date: {
        year: {
            type: String,
            required: true,
        },
        month: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        weekday: {
            type: String,
            required: true,
        },
    },
    created_time: {
        type: String,
        required: true,
    },
    last_modified_time: {
        type: String,
    },
    weather: {
        type: String,
        enum: weather,
    },
    mood: String,
    content: {
        type: String,
        required: true,
    },
    images: [ImageSchema],
});

module.exports = mongoose.model("Diary", DiarySchema);
