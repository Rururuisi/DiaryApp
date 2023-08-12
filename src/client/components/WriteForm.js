import "../styles/writeForm.css";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";

import {
    weathers,
    getCurrentDateObj,
    getWeekday_YMD,
    getCurrentTimeStr,
} from "../utils/diaryInfoTools";

export default function WriteForm({ diaryCurrentState }) {
    let initialDiary = diaryCurrentState || {
        title: "",
        date: getCurrentDateObj(),
        weather: "sunny",
        content: "",
        last_modified_time: "",
    };

    const [diary, setDiary] = useState(initialDiary);

    const handleDate = (evt) => {
        const [year, month, date] = evt.target.value.split("-");
        const weekday = getWeekday_YMD(evt.target.value, "-");
        const currentDate = { year, month, date, weekday };
        setDiary((prevData) => ({
            ...prevData,
            date: currentDate,
        }));
    };

    const handleDiary = (evt, data) => {
        setDiary((prevData) => ({
            ...prevData,
            [data]: evt.target.value,
        }));
    };

    const formSubmit = async (evt) => {
        evt.preventDefault();
        const diaryData = {
            ...diary,
            last_modified_time: getCurrentTimeStr(),
        };
        const response = await fetch("/diary/new", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(diaryData),
        });
        const data = await response.json();
        alert(data);
    };

    return (
        <div>
            <div className="dateTopDisplay">
                {diary.date.weekday}{" "}
                {`${diary.date.month}/${diary.date.date}/${diary.date.year}`}
            </div>
            <form className="WriteForm" onSubmit={formSubmit}>
                <label for="title">title: </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={diary.title}
                    onChange={(evt) => handleDiary(evt, "title")}
                />
                <hr />
                <section>
                    <div>
                        <label for="date">date: </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={`${diary.date.year}-${diary.date.month}-${diary.date.date}`}
                            onChange={handleDate}
                        />
                    </div>
                    <div>
                        <label for="weather">weather: </label>
                        <select
                            id="weather"
                            name="weather"
                            value={diary.weather}
                            onChange={(evt) => handleDiary(evt, "weather")}
                        >
                            {weathers.map((weather, idx) => (
                                <option key={idx} value={weather.weather}>
                                    {weather.symbol}
                                </option>
                            ))}
                        </select>
                    </div>
                </section>
                <hr />
                <textarea
                    id="content"
                    name="content"
                    placeholder="Type your content here..."
                    value={diary.content}
                    onChange={(evt) => handleDiary(evt, "content")}
                />
                <hr />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        position: "fixed",
                        top: "10px",
                        right: "10px",
                        "&:hover": {
                            backgroundColor: (theme) =>
                                theme.palette.ternary.light,
                        },
                        backgroundColor: (theme) => theme.palette.primary.dark,
                        borderRadius: 25,
                        minWidth: 0,
                    }}
                >
                    <CheckIcon />
                </Button>
            </form>
        </div>
    );
}
