import "../styles/imageList.css";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { getWeather } from "../utils/diaryInfoTools";
import { Emoji, EmojiStyle } from "emoji-picker-react";

export default function DiaryCard({ diary }) {
    return (
        <Card
            sx={{
                width: "100%",
                boxShadow: "1px 1px 5px #bbb",
                marginTop: "20px",
                cursor: "pointer",
                textAlign: "left",
                "&:hover": {
                    backgroundColor: "#eee",
                },
            }}
        >
            <CardContent>
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
                    <div
                        style={{
                            color: "grey",
                        }}
                    >
                        <small>@{diary.created_time}</small>
                    </div>
                </Typography>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontSize="18px"
                    sx={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div>{diary.title}</div>
                    <Emoji unified={diary.mood} />
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {diary.content.length > 150
                        ? `${diary.content.slice(0, 150)}...`
                        : diary.content}
                </Typography>
                <div className="imageContainer">
                    {diary.images &&
                        diary.images.length > 0 &&
                        diary.images.map((img, idx) => (
                            <img
                                className="thumbnail"
                                key={idx}
                                src={img.url}
                                title={img.filename}
                            />
                        ))}
                </div>
            </CardContent>
        </Card>
    );
}
