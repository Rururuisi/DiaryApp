import "../styles/showDiary.css";
import "../styles/imageList.css";
import "../styles/imageUploader.css";
import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { getWeather } from "../utils/diaryInfoTools";
import DeleteAlert from "./DeleteAlert";
import { UserContext } from "../contexts/UserContextProvider";
import { deleteDiary } from "../utils/fetchData";
import { Emoji, EmojiStyle } from "emoji-picker-react";
import ImageToggleFullScreen from "./ImageToggleFullScreen";

export default function ShowDiary({ diary, onEditForm, onClosePopup }) {
	const paragraphs = diary.content.split("\n");
	const { user, toggleFetch } = useContext(UserContext);

	const [isOpen, setIsOpen] = useState(false);

	const closeAnnounce = () => {
		setIsOpen(false);
	};

	const handleDelete = async () => {
		closeAnnounce();
		try {
			deleteDiary(user._id, diary._id);
			onClosePopup(false);
			toggleFetch();
		} catch (err) {
			alert(err.message);
		}
	};

	return (
		<>
			{isOpen && (
				<DeleteAlert
					onClose={closeAnnounce}
					onDelete={handleDelete}
					deleteObjName={"the diary"}
				/>
			)}
			<div className='ShowDiary'>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
					}}>
					<h2>{diary.title}</h2>
					<Emoji unified={diary.mood} />
				</div>
				<hr />
				<p id='dateWeather'>
					<Typography
						component='div'
						display='flex'
						justifyContent={"space-between"}>
						<div style={{ color: "black" }}>
							<small>{diary.created_date.weekday}</small>{" "}
							<small>{`${diary.created_date.month}/${diary.created_date.date}/${diary.created_date.year}`}</small>{" "}
							<small>{getWeather(diary.weather)}</small>{" "}
						</div>
						<div style={{ fontSize: "14px", color: "grey" }}>
							<small>
								@
								{diary.created_time || diary.last_modified_time}
							</small>
						</div>
					</Typography>
				</p>
				{paragraphs.map((paragraph, idx) => (
					<p key={idx}>{paragraph}</p>
				))}
				<div className='imageContainer' style={{ marginTop: "50px" }}>
					{diary.images &&
						diary.images.length > 0 &&
						diary.images.map((img, idx) => (
							<div key={idx} className='Image'>
								<ImageToggleFullScreen
									url={img.url}
									filename={img.filename}
								/>
							</div>
						))}
				</div>
				{diary.last_modified_time ? (
					<Typography
						component='div'
						sx={{
							marginTop: "40px",
							color: "grey",
							fontSize: "14px",
						}}>
						<small>last-modified @{diary.last_modified_time}</small>
					</Typography>
				) : null}
				<Button
					type='submit'
					variant='contained'
					sx={{
						position: "fixed",
						top: "10px",
						right: "80px",
						"&:hover": {
							backgroundColor: "#d13b00",
							color: "#fff",
						},
						color: (theme) => theme.palette.primary.main,
						backgroundColor: (theme) => theme.palette.ternary.main,
						borderRadius: 50,
						width: "40px",
						minWidth: 0,
						zIndex: 1,
					}}
					onClick={() => setIsOpen(true)}>
					<DeleteIcon />
				</Button>
				<Button
					type='submit'
					variant='contained'
					sx={{
						position: "fixed",
						top: "10px",
						right: "10px",
						"&:hover": {
							backgroundColor: (theme) =>
								theme.palette.ternary.light,
						},
						backgroundColor: (theme) => theme.palette.primary.dark,
						borderRadius: 25,
						minWidth: 0,
						zIndex: 1,
					}}
					onClick={() => onEditForm(diary)}>
					<EditIcon />
				</Button>
			</div>
		</>
	);
}
