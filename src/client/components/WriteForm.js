import "../styles/writeForm.css";
import "../styles/imageUploader.css";
import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";
import MoodSelector from "./MoodSelector";
import ImageUploader from "./ImageUploader";
import ImageToggleFullScreen from "./ImageToggleFullScreen";
import { UserContext } from "../utils/UserContextProvider";
import { createDiary, updateDiary } from "../utils/fetchData";
import {
    weathers,
    getCurrentDateObj,
    getWeekday_YMD,
} from "../utils/diaryInfoTools";

const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 20px;
    font-weight: 400;
    font-family: monospace;
    line-height: 1.5;
    padding: 0 0 20px 0;
    border-radius: 0;
    color: #535353;
    background: #fff;
    border: none;
    box-shadow: none;
    resize: none;
  
    &:hover {
      border: none;
    }
  
    &:focus {
      border: none;
      box-shadow: none;
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
);

export default function WriteForm({ diaryCurrentState, onReadForm }) {
    let emptyDiary = {
        title: "",
        created_date: getCurrentDateObj(),
        weather: "sunny",
        mood: "",
        content: "",
    };

    let initialDiary = diaryCurrentState || emptyDiary;

    const [disabledSubmit, setDisabledSubmit] = useState(false);
    const [diary, setDiary] = useState(initialDiary);
    const [addImages, setAddImages] = useState([]);
    const [removeImages, setRemoveImages] = useState([]);
    const { user, toggleFetch } = useContext(UserContext);

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
            [data]: data === "mood" ? evt.unified : evt.target.value,
        }));
    };

    const handleImages = (imgs) => {
        setAddImages(imgs);
    };

    const formSubmit = async (evt) => {
        evt.preventDefault();
        setDisabledSubmit(true);
        try {
            let newDiaryData;
            if (diary._id) {
                const diaryData = {
                    ...diary,
                    last_modified_time: new Date().toLocaleTimeString([], {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                    }),
                };
                const formData = new FormData();
                formData.append("diary", JSON.stringify(diaryData));
                newDiaryData = await updateDiary(
                    user._id,
                    diaryData._id,
                    formData
                );
            } else {
                const diaryData = {
                    ...diary,
                    created_time: new Date().toLocaleTimeString([], {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                    }),
                };
                const formData = new FormData();
                formData.append("diary", JSON.stringify(diaryData));
                addImages.map((img) => {
                    formData.append(`addImages`, img);
                });
                newDiaryData = await createDiary(user._id, formData);
            }
            toggleFetch();
            setDiary(newDiaryData);
            onReadForm(newDiaryData);
        } catch (err) {
            setDisabledSubmit(false);
            alert(err.message);
        }
    };

    return (
        <div className="WriteFormContainer">
            <div className="dateTopDisplay" style={{ zIndex: 1 }}>
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
                <div style={{ display: "flex" }}>
                    <label for="date">date: </label>
                    <input
                        style={{ flexGrow: 1 }}
                        type="date"
                        id="date"
                        name="date"
                        value={`${diary.created_date.year}-${diary.created_date.month}-${diary.created_date.date}`}
                        onChange={handleDate}
                    />
                </div>
                <section>
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
                    <div style={{ display: "flex" }}>
                        <label for="mood">mood: </label>
                        <MoodSelector
                            emoji={diary.mood}
                            handleMood={handleDiary}
                        />
                    </div>
                </section>
                <hr />
                <StyledTextarea
                    aria-label="content"
                    minRows={9}
                    value={diary.content}
                    onChange={(evt) => handleDiary(evt, "content")}
                    placeholder="Type your content here..."
                />
                <hr />
                <div className="imageContainer" style={{ marginTop: "50px" }}>
                    {diary.images &&
                        diary.images.length > 0 &&
                        diary.images.map((img, idx) => (
                            <div className="thumbnail" key={idx}>
                                <ImageToggleFullScreen
                                    url={img.url}
                                    filename={img.filename}
                                />
                            </div>
                        ))}
                </div>
                <ImageUploader imagesSetter={handleImages} />
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
                    disabled={disabledSubmit}
                >
                    <CheckIcon />
                </Button>
            </form>
        </div>
    );
}
