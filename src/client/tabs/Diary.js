import "../styles/diary.css";
import React, { useState } from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import DisplayDiary from "../components/DisplayDiaries";

export default function Diary() {
    return (
        <div className="Diary">
            <header>
                <h1>
                    Diary <AutoStoriesIcon />
                </h1>
            </header>
            <DisplayDiary />
        </div>
    );
}
