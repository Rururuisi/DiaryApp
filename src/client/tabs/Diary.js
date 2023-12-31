import "../styles/diary.css";
import React, { useState, useContext } from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import DiaryTabViewToolBar from "../components/DiaryTabViewToolBar";
import DisplayDiary from "../components/DisplayDiaries";
import MultiDeleteForm from "../components/MultiDeleteForm";
import { UserContext } from "../contexts/UserContextProvider";

const handleFilter = (year, month, diaries) => {
	const yearStr = year.toString();
	const monthStr = month.toString();
	let filterDiaries;
	if (yearStr !== "" && monthStr !== "") {
		filterDiaries = diaries.filter(
			(diary) =>
				diary.created_date.year === yearStr &&
				diary.created_date.month === monthStr.padStart(2, 0)
		);
	} else if (yearStr !== "") {
		filterDiaries = diaries.filter(
			(diary) => diary.created_date.year === yearStr
		);
	} else if (monthStr !== "") {
		filterDiaries = diaries.filter(
			(diary) => diary.created_date.month === monthStr.padStart(2, 0)
		);
	} else {
		filterDiaries = diaries;
	}
	return filterDiaries;
};

export default function Diary() {
	const { user } = useContext(UserContext);

	const [isRecent, setIsRecent] = useState(true);
	const [isSelect, setIsSelect] = useState(false);
	const [filter, setFilter] = useState({
		year: "",
		month: "",
	});

	const oldestOrder = () => {
		setIsRecent(false);
	};

	const recentOrder = () => {
		setIsRecent(true);
	};

	const displaySelectPage = () => {
		setIsSelect(true);
	};

	const displayDiaries = () => {
		setIsSelect(false);
	};

	//filter
	const onFilter = (year, month) => {
		setFilter({ year, month });
	};

	const disableFilter = () => {
		setFilter({ year: "", month: "" });
	};

	const diaries = isRecent
		? handleFilter(
				filter.year,
				filter.month,
				user.diaries.slice().reverse()
		  )
		: handleFilter(filter.year, filter.month, user.diaries);

	const viewToolBar = (
		<DiaryTabViewToolBar
			recentOrder={recentOrder}
			oldestOrder={oldestOrder}
			displaySelectPage={displaySelectPage}
			onFilter={onFilter}
			disableFilter={disableFilter}
		/>
	);

	return (
		<div className='Diary'>
			<header>
				<h1>
					Diary <AutoStoriesIcon />
				</h1>
			</header>
			<main>
				{isSelect ? (
					<MultiDeleteForm
						diaries={diaries}
						displayDiaries={displayDiaries}
					/>
				) : (
					<DisplayDiary diaries={diaries} toolbar={viewToolBar} />
				)}
			</main>
		</div>
	);
}
