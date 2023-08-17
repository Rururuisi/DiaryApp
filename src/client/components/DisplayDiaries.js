import "../styles/diary.css";
import React, { useState, useContext } from "react";
import PopupPage from "./PopupPage";
import DiaryCard from "./DiaryCard";
import SortDiary from "./SortDiary";
import { UserContext } from "../utils/UserContextProvider";

export default function DisplayDiary() {
    const { user } = useContext(UserContext);

    const [diaries, setDiaries] = useState([...user.diaries].reverse());

    const oldestOrder = () => {
        setDiaries([...user.diaries]);
    };

    const recentOrder = () => {
        setDiaries([...user.diaries].reverse());
    };

    const displaySelectPage = () => {};

    return (
        <>
            <nav className="ToolBar">
                <div>filter</div>
                <div>
                    <SortDiary
                        onRecent={recentOrder}
                        onOldest={oldestOrder}
                        onMultiDelete={displaySelectPage}
                    />
                </div>
            </nav>
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
        </>
    );
}
