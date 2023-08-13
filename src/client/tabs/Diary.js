import "../styles/diary.css";
import React, { useState, useEffect } from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PopupPage from "../components/PopupPage";
import DiaryCard from "../components/DiaryCard";
import ShowDiary from "../components/ShowDiary";

export default function Diary({ diaries }) {
    return (
        <div className="Diary">
            <header>
                <h1>
                    Diary <AutoStoriesIcon />
                </h1>
            </header>
            <nav>[---过滤/筛选工具 + 正逆序排序 + 批量删除---]</nav>
            {diaries &&
                diaries.map((diary) => (
                    <PopupPage
                        key={diary._id}
                        pageContent={<ShowDiary diary={diary} />}
                        toggleComponent={<DiaryCard diary={diary} />}
                    />
                ))}
        </div>
    );
}
