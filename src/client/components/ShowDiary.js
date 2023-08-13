import "../styles/showDiary.css";
import React from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import { getWeather } from "../utils/diaryInfoTools";

export default function ShowDiary({ diary }) {
    const paragraphs = diary.content.split("\n");

    return (
        <div className="ShowDiary">
            {/* <div>
        
      </div> */}
            <h2>{diary.title}</h2>
            <hr />
            <p id="dateWeather">
                <small>
                    {diary.created_date.weekday}{" "}
                    {`${diary.created_date.month}/${diary.created_date.date}/${diary.created_date.year}`}{" "}
                    {getWeather(diary.weather)}
                </small>
            </p>
            {paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
            ))}
            <Button
                type="submit"
                variant="contained"
                sx={{
                    position: "fixed",
                    top: "10px",
                    right: "10px",
                    "&:hover": {
                        backgroundColor: (theme) => theme.palette.ternary.light,
                    },
                    backgroundColor: (theme) => theme.palette.primary.dark,
                    borderRadius: 25,
                    minWidth: 0,
                }}
            >
                <EditIcon />
            </Button>
        </div>
    );
}
