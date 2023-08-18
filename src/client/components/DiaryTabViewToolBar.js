import "../styles/diary.css";
import React from "react";
import SortDiary from "./SortDiary";

function DiaryTabViewToolBar({ recentOrder, oldestOrder, displaySelectPage }) {
    return (
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
    );
}

export default DiaryTabViewToolBar;
