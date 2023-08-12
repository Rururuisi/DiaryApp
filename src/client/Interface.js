import "./styles/interface.css";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TimelineIcon from "@mui/icons-material/Timeline";
import GridViewIcon from "@mui/icons-material/GridView";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Timeline from "./tabs/Timeline";
import Diary from "./tabs/Diary";
import Calendar from "./tabs/Calendar";
import Account from "./tabs/Account";
import PopupPage from "./components/PopupPage";
import WriteForm from "./components/WriteForm";
import AddDiaryIcon from "./components/AddDiaryIcon";

const StyledTab = styled(Tab)({
    minWidth: 0,
    height: 60,
});

export default function App() {
    const [value, setValue] = useState("timeline");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <TabContext className="TabContext" value={value}>
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
                    className="TabList"
                    indicatorColor="none"
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                >
                    <StyledTab
                        className="Tab"
                        label={<TimelineIcon />}
                        value="timeline"
                    />
                    <StyledTab
                        className="Tab"
                        label={<GridViewIcon />}
                        value="diary"
                    />
                    <i className="Tab"></i>
                    <StyledTab
                        className="Tab"
                        label={<CalendarMonthIcon />}
                        value="calendar"
                    />
                    <StyledTab
                        className="Tab"
                        label={<AccountCircleIcon />}
                        value="account"
                    />
                </TabList>
                <TabPanel value="timeline">
                    <Timeline />
                </TabPanel>
                <TabPanel value="diary">
                    <Diary />
                </TabPanel>
                <TabPanel value="calendar">
                    <Calendar />
                </TabPanel>
                <TabPanel sx={{ padding: 0 }} value="account">
                    <Account />
                </TabPanel>
            </TabContext>
            <PopupPage
                pageContent={<WriteForm />}
                toggleComponent={<AddDiaryIcon />}
            />
        </div>
    );
}
