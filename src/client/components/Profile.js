import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const imageUrl =
    "https://res.cloudinary.com/dbcxqmkq0/image/upload/v1691980561/DiaryAppAssets/profileBG_qwd1lw.avif";
const avatar =
    "https://res.cloudinary.com/dbcxqmkq0/image/upload/v1691980555/DiaryAppAssets/avatar_d4grja.jpg";

export default function Profile({ user }) {
    return (
        <Card sx={{ Width: "100%" }}>
            <Avatar
                sx={{
                    position: "absolute",
                    top: 90,
                    left: 0,
                    right: 0,
                    margin: "0 auto",
                    width: 140,
                    height: 140,
                    border: "4px solid #eee",
                }}
                alt="avatar"
                src={avatar}
            />
            <CardMedia
                sx={{ height: 250 }}
                image={imageUrl}
                title="avatar background"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {user.displayName || user.username}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This person is lazy, didn't leave anything here...
                </Typography>
            </CardContent>
        </Card>
    );
}
