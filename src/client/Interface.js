import "./styles/interface.css";
import React, { useState, useEffect } from "react";
import Tabs from "./components/Tabs";
import PopupPage from "./components/PopupPage";
import AddDiaryIcon from "./components/AddDiaryIcon";

export default function Interface() {
    const [diaryEntries, setDiaryEntries] = useState([]);

    useEffect(async () => {
        const response = await fetch("/api/diary");
        const diaryData = await response.json();
        setDiaryEntries(diaryData);
    });

    return (
        <div>
            <Tabs diaries={diaryEntries} />
            <PopupPage
                pageContent={"WriteForm"}
                toggleComponent={<AddDiaryIcon />}
            />
        </div>
    );
}
