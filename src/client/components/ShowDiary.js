import "../styles/showDiary.css";
import React from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import { getWeather } from "../utils/diaryInfoTools";

export default function ShowDiary({ diary, onEditForm }) {
    const paragraphs = diary.content.split("\n");

    return (
        <div className="ShowDiary">
            <h2>{diary.title}</h2>
            <hr />
            <p id="dateWeather">
                <Typography
                    component="div"
                    margin="0 0 10px 0"
                    display="flex"
                    justifyContent={"space-between"}
                >
                    <div>
                        <small>{diary.created_date.weekday}</small>{" "}
                        <small>{`${diary.created_date.month}/${diary.created_date.date}/${diary.created_date.year}`}</small>{" "}
                        <small>{getWeather(diary.weather)}</small>
                    </div>
                    <div>
                        <small>{diary.last_modified_time}</small>
                    </div>
                </Typography>
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
                onClick={() => onEditForm(diary)}
            >
                <EditIcon />
            </Button>
        </div>
    );
}
