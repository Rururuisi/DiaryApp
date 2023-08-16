import "../styles/writeForm.css";
import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import { UserContext } from "../utils/UserContextProvider";
import { createDiary, updateDiary } from "../utils/fetchData";
import {
    weathers,
    getCurrentDateObj,
    getWeekday_YMD,
    getCurrentTimeStr,
} from "../utils/diaryInfoTools";

export default function WriteForm({ diaryCurrentState, onReadForm }) {
    let emptyDiary = {
        title: "",
        created_date: getCurrentDateObj(),
        weather: "sunny",
        content: "",
        last_modified_time: "",
    };

    let initialDiary = diaryCurrentState || emptyDiary;

    const [diary, setDiary] = useState(initialDiary);
    const { user } = useContext(UserContext);

    const handleDate = (evt) => {
        const [year, month, date] = evt.target.value.split("-");
        const weekday = getWeekday_YMD(evt.target.value, "-");
        const currentDate = { year, month, date, weekday };
        setDiary((prevData) => ({
            ...prevData,
            created_date: currentDate,
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
        try {
            const diaryData = {
                ...diary,
                last_modified_time: getCurrentTimeStr(),
            };
            let newDiaryData;
            if (diaryData._id) {
                newDiaryData = await updateDiary(
                    user._id,
                    diaryData._id,
                    diaryData
                );
            } else {
                newDiaryData = await createDiary(user._id, diaryData);
            }
            setDiary(newDiaryData);
            onReadForm(newDiaryData);
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div>
            <div className="dateTopDisplay">
                {diary.created_date.weekday}{" "}
                {`${diary.created_date.month}/${diary.created_date.date}/${diary.created_date.year}`}
            </div>
            <form className="WriteForm" onSubmit={formSubmit}>
                <label for="title">title: </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={diary.title}
                    onChange={(evt) => handleDiary(evt, "title")}
                    required
                />
                <hr />
                <section>
                    <div>
                        <label for="date">date: </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={`${diary.created_date.year}-${diary.created_date.month}-${diary.created_date.date}`}
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
                    required
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
                        zIndex: 1,
                    }}
                >
                    <CheckIcon />
                </Button>
            </form>
        </div>
    );
}
