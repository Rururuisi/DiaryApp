import "../styles/diary.css";
import React from "react";
import PopupPage from "./PopupPage";
import DiaryCard from "./DiaryCard";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function DisplayDiary({ diaries, toolbar, selectMode = false }) {
    return (
        <>
            {toolbar}
            <FormGroup>
                {diaries.length ? (
                    diaries.map((diary) =>
                        selectMode ? (
                            <FormControlLabel
                                sx={{
                                    m: 0,
                                    "& .MuiFormControlLabel-label": {
                                        flexGrow: 1,
                                    },
                                }}
                                control={<Checkbox />}
                                label={<DiaryCard diary={diary} />}
                            />
                        ) : (
                            <PopupPage
                                key={diary._id}
                                diary={diary}
                                pageContent={"ShowDiary"}
                                toggleComponent={<DiaryCard diary={diary} />}
                            />
                        )
                    )
                ) : (
                    <p class="noDiary">
                        <small>NO DIARY</small>
                    </p>
                )}
            </FormGroup>
        </>
    );
}
