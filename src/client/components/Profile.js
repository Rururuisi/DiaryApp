import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const imageUrl =
    "https://images.unsplash.com/photo-1519327232521-1ea2c736d34d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80";
const avatar = "https://upen.caup.net/ai_pics_mj/202303/1677952366325269.jpg";

export default function Profile() {
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
                    Username
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This person is lazy, didn't leave anything here...
                </Typography>
            </CardContent>
        </Card>
    );
}
