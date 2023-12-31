import "../styles/interface.css";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Dashboard from "../tabs/Dashboard";
import Diary from "../tabs/Diary";
import Calendar from "../tabs/Calendar";
import Account from "../tabs/Account";

const StyledTab = styled(Tab)({
	minWidth: 0,
	height: 60,
});

function Tabs() {
	const [value, setValue] = useState("timeline");

	const handleChange = (evt, newValue) => {
		setValue(newValue);
	};

	return (
		<TabContext className='TabContext' value={value}>
			<TabList
				sx={{
					zIndex: 1,
					backgroundColor: (theme) => theme.palette.ternary.main,
					"& .MuiSvgIcon-root": {
						color: (theme) => theme.palette.primary.main,
						fontSize: "1.5rem",
					},
					"& .Mui-selected": {
						"& .MuiSvgIcon-root": {
							color: (theme) => theme.palette.primary.dark,
							fontSize: "2.25rem",
						},
					},
				}}
				className='TabList'
				indicatorColor='none'
				onChange={handleChange}
				aria-label='lab API tabs example'>
				<StyledTab
					className='Tab'
					label={<LeaderboardRoundedIcon />}
					value='timeline'
				/>
				<StyledTab
					className='Tab'
					label={<AutoStoriesIcon />}
					value='diary'
				/>
				<i className='Tab'></i>
				<StyledTab
					className='Tab'
					label={<CalendarMonthIcon />}
					value='calendar'
				/>
				<StyledTab
					className='Tab'
					label={<AccountCircleIcon />}
					value='account'
				/>
			</TabList>
			<TabPanel
				sx={{
					backgroundColor: (theme) => theme.palette.ternary.main,
					padding: "24px 24px 100px 24px",
					minHeight: "100vh",
				}}
				value='timeline'>
				<Dashboard />
			</TabPanel>
			<TabPanel
				sx={{
					backgroundColor: (theme) => theme.palette.ternary.main,
					padding: "24px 0 100px 0",
					minHeight: "100vh",
				}}
				value='diary'>
				<Diary />
			</TabPanel>
			<TabPanel
				sx={{
					backgroundColor: (theme) => theme.palette.ternary.main,
					padding: "24px 24px 100px 24px",
					minHeight: "100vh",
				}}
				value='calendar'>
				<Calendar />
			</TabPanel>
			<TabPanel
				sx={{
					backgroundColor: (theme) => theme.palette.ternary.main,
					padding: "0 0 100px 0",
					minHeight: "100vh",
				}}
				value='account'>
				<Account />
			</TabPanel>
		</TabContext>
	);
}

export default Tabs;
