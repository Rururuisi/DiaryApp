import "../styles/diary.css";
import React from "react";
import PopupPage from "./PopupPage";
import DiaryCard from "./DiaryCard";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function DisplayDiary({
    diaries,
    toolbar,
    selectMode = false,
    selectDiaries,
    toggleSelect,
}) {
    return (
        <>
            {toolbar}
            <FormGroup id="FormGroup">
                {diaries.length ? (
                    diaries.map((diary) =>
                        selectMode ? (
                            <FormControlLabel
                                key={diary._id}
                                sx={{
                                    m: 0,
                                    "& .MuiFormControlLabel-label": {
                                        flexGrow: 1,
                                    },
                                }}
                                control={
                                    <Checkbox
                                        onClick={(evt) =>
                                            toggleSelect(evt, diary._id)
                                        }
                                        checked={selectDiaries.includes(
                                            diary._id
                                        )}
                                    />
                                }
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
