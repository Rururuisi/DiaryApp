import "../styles/diary.css";
import React from "react";
import DisplayDiary from "./DisplayDiaries";
import DiarySelectToolBar from "./DiarySelectToolBar";

function MultiDeleteForm({ diaries, displayDiaries }) {
    const selectToolBar = (
        <DiarySelectToolBar displayDiaries={displayDiaries} />
    );

    return (
        <div>
            <DisplayDiary
                diaries={diaries}
                toolbar={selectToolBar}
                selectMode={true}
            />
        </div>
    );
}

export default MultiDeleteForm;
