import "../styles/diary.css";
import React, { useEffect, useContext } from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PopupPage from "../components/PopupPage";
import DiaryCard from "../components/DiaryCard";
import { UserContext } from "../utils/UserContextProvider";
import DiarySortFilter from "../components/DiarySortFilter";

export default function Diary() {
    const { user } = useContext(UserContext);
    const diaries = user.diaries;

    return (
        <div className="Diary">
            <header>
                <h1>
                    Diary <AutoStoriesIcon />
                </h1>
            </header>
            <DiarySortFilter />
            {diaries.length ? (
                diaries.map((diary) => (
                    <PopupPage
                        key={diary._id}
                        diary={diary}
                        pageContent={"ShowDiary"}
                        toggleComponent={<DiaryCard diary={diary} />}
                    />
                ))
            ) : (
                <p class="noDiary">
                    <small>NO DIARY</small>
                </p>
            )}
        </div>
    );
}
