import "../styles/diary.css";
import React, { useEffect, useState, useContext } from "react";
import DisplayDiary from "./DisplayDiaries";
import DiarySelectToolBar from "./DiarySelectToolBar";
import DeleteAlert from "./DeleteAlert";
import { deleteDiary } from "../utils/fetchData";
import { UserContext } from "../contexts/UserContextProvider";

function MultiDeleteForm({ diaries, displayDiaries }) {
	const { user, toggleFetch } = useContext(UserContext);

	const [isSelectAll, setIsSelectAll] = useState(false);
	const [selectDiaries, setSelectDiaries] = useState([]);
	const [isOpenAlert, setIsOpenAlert] = useState(false);

	useEffect(() => {
		if (isSelectAll) {
			setSelectDiaries(diaries.map((diary) => diary._id));
		} else {
			setSelectDiaries([]);
		}
	}, [isSelectAll]);

	const toggleSelectAll = () => setIsSelectAll(!isSelectAll);

	const toggleSelect = (evt, id) => {
		if (evt.target.checked) {
			setSelectDiaries((prevData) => [...prevData, id]);
		} else {
			setSelectDiaries((prevData) =>
				prevData.filter((diaryId) => diaryId !== id)
			);
		}
	};

	const openAlert = () => setIsOpenAlert(true);
	const closeAlert = () => setIsOpenAlert(false);

	const handleDeleteAllSelected = () => {
		selectDiaries.map(async (diary) => {
			await deleteDiary(user._id, diary).catch((err) =>
				alert(err.message)
			);
		});
		toggleFetch();
		displayDiaries();
	};

	const selectToolBar = (
		<DiarySelectToolBar
			selectNum={selectDiaries.length}
			displayDiaries={displayDiaries}
			selectAll={toggleSelectAll}
			handleDelete={openAlert}
		/>
	);

	return (
		<>
			<div>
				<DisplayDiary
					diaries={diaries}
					toolbar={selectToolBar}
					selectMode={true}
					selectDiaries={selectDiaries}
					toggleSelect={toggleSelect}
				/>
			</div>
			{isOpenAlert && (
				<DeleteAlert
					onClose={closeAlert}
					onDelete={handleDeleteAllSelected}
					deleteObjName={"these diaries"}
				/>
			)}
		</>
	);
}

export default MultiDeleteForm;
