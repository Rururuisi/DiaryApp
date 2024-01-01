import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { UserContext } from "../contexts/UserContextProvider";

const imageUrl =
	"https://res.cloudinary.com/dbcxqmkq0/image/upload/v1692071907/DiaryAppAssets/profileBG_fhodas.jpg";
const avatar =
	"https://res.cloudinary.com/dbcxqmkq0/image/upload/v1691980555/DiaryAppAssets/avatar_d4grja.jpg";

export default function Profile() {
	const { user } = useContext(UserContext);

	return (
		<Card sx={{ Width: "100%", boxShadow: "none" }}>
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
					cursor: "pointer",
				}}
				alt='avatar'
				src={avatar}
			/>
			<CardMedia
				sx={{ height: 250 }}
				image={user?.profileBG?.url || imageUrl}
				title='avatar background'
			/>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{user.displayName || user.username}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{user.intro ||
						"This person is lazy, didn't leave anything here..."}
				</Typography>
			</CardContent>
		</Card>
	);
}
