import "../styles/diary.css";
import React from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PopupPage from "../components/PopupPage";
import DiaryCard from "../components/DiaryCard";
import ShowDiary from "../components/ShowDiary";
import testData from "../utils/testData.json";

const { diary_entries } = testData;
const diaries = diary_entries.reverse();

export default function Diary() {
  return (
    <div className="Diary">
      <header>
        <h1>
          Diary <AutoStoriesIcon />
        </h1>
      </header>
      <nav>[---过滤/筛选工具 + 正逆序排序 + 批量删除---]</nav>
      {diaries.map((diary, idx) => (
        <PopupPage
          key={idx}
          pageContent={<ShowDiary diary={diary} />}
          toggleComponent={<DiaryCard diary={diary} />}
        />
      ))}
    </div>
  );
}
