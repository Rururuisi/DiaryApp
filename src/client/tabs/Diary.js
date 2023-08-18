import "../styles/diary.css";
import React, { useState, useEffect, useContext } from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import DiaryTabViewToolBar from "../components/DiaryTabViewToolBar";
import DisplayDiary from "../components/DisplayDiaries";
import MultiDeleteForm from "../components/MultiDeleteForm";
import { UserContext } from "../utils/UserContextProvider";

export default function Diary() {
    const { user } = useContext(UserContext);

    const [isRecent, setIsRecent] = useState(true);
    const [isSelect, setIsSelect] = useState(false);

    const oldestOrder = () => {
        setIsRecent(false);
    };

    const recentOrder = () => {
        setIsRecent(true);
    };

    const displaySelectPage = () => {
        setIsSelect(true);
    };

    const displayDiaries = () => {
        setIsSelect(false);
    };

    const diaries = isRecent ? user.diaries.slice().reverse() : user.diaries;

    const viewToolBar = (
        <DiaryTabViewToolBar
            recentOrder={recentOrder}
            oldestOrder={oldestOrder}
            displaySelectPage={displaySelectPage}
        />
    );

    return (
        <div className="Diary">
            <header>
                <h1>
                    Diary <AutoStoriesIcon />
                </h1>
            </header>
            {isSelect ? (
                <MultiDeleteForm
                    diaries={diaries}
                    displayDiaries={displayDiaries}
                />
            ) : (
                <DisplayDiary diaries={diaries} toolbar={viewToolBar} />
            )}
        </div>
    );
}
