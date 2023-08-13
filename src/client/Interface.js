import "./styles/interface.css";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Tabs from "./components/Tabs";
import PopupPage from "./components/PopupPage";
import WriteForm from "./components/WriteForm";
import AddDiaryIcon from "./components/AddDiaryIcon";
import { set } from "mongoose";

export default function Interface() {
    const [diaryEntries, setDiaryEntries] = useState([]);

    useEffect(async () => {
        const response = await fetch("/diary");
        const diaryData = await response.json();
        setDiaryEntries(diaryData);
    }, []);

    const handleAdd = (diary) => {
        setDiaryEntries((prevData) => [...prevData, diary]);
    };

    return (
        <div>
            {diaryEntries.length > 0 ? (
                <>
                    <Tabs diaries={diaryEntries} />
                    <PopupPage
                        pageContent={<WriteForm onAddDiary={handleAdd} />}
                        toggleComponent={<AddDiaryIcon />}
                    />
                </>
            ) : (
                <Box
                    sx={{
                        position: "fixed",
                        top: 50,
                        left: 0,
                        right: 0,
                        margin: "auto",
                    }}
                >
                    <CircularProgress />
                </Box>
            )}
        </div>
    );
}
