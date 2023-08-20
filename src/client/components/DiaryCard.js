import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { getWeather } from "../utils/diaryInfoTools";

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
                    <div style={{ color: "grey" }}>
                        <small>@{diary.created_time}</small>
                    </div>
                </Typography>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontSize="18px"
                >
                    {diary.title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {diary.content.length > 150
                        ? `${diary.content.slice(0, 150)}...`
                        : diary.content}
                </Typography>
            </CardContent>
            {/* <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            /> */}
        </Card>
    );
}
