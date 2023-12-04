import "../styles/calendar.css";
import React, { useState, useEffect, useContext, useRef } from "react";
import dayjs from "dayjs";
import Badge from "@mui/material/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { UserContext } from "../utils/UserContextProvider";
import PopupPage from "../components/PopupPage";
import DiaryCard from "../components/DiaryCard";

const dateCalendarStyles = {
    border: "2px solid",
    borderColor: (theme) => theme.palette.primary.main,
    borderRadius: "25px",
    width: "380px",
    "& .css-nk89i7-MuiPickersCalendarHeader-root": {
        marginBottom: "10px",
    },
    "& .MuiDayCalendar-header": {
        height: "30px",
        marginBottom: "10px",
        backgroundColor: (theme) => theme.palette.primary.main,
    },
    "& .MuiDayCalendar-weekDayLabel": {
        color: (theme) => theme.palette.ternary.main,
    },
    "& .MuiDateCalendar-viewTransitionContainer": {
        transform: "scale(1.1)",
        translate: "0 10px",
    },
    "& .MuiYearCalendar-root": {
        margin: "0 25px",
        transform: "scale(0.8)",
        translate: "0 -10px",
    },
    "& .MuiMonthCalendar-root": {
        margin: "0 25px",
        transform: "scale(0.8)",
    },
    "& .MuiPickersDay-dayOutsideMonth": {
        color: (theme) => theme.palette.primary.dark,
    },
    "& .css-144dnr3-MuiBadge-badge": {
        top: "20%",
    },
};

const initialValue = dayjs(new Date());

function ServerDay(props) {
    const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

    const isSelected =
        !props.outsideCurrentMonth &&
        highlightedDays.indexOf(props.day.date()) >= 0;

    return (
        <Badge
            key={props.day.toString()}
            overlap="circular"
            badgeContent={isSelected ? "🌺" : undefined}>
            <PickersDay
                {...other}
                outsideCurrentMonth={outsideCurrentMonth}
                day={day}
            />{" "}
        </Badge>
    );
}

const getDiariesOnDate = (diaries, { year, month, date }) => {
    return diaries.filter(
        (diary) =>
            diary.created_date.year === year &&
            diary.created_date.month === month &&
            diary.created_date.date === date
    );
};

const setBadgeOnMonth = (diaries, { year, month }) => {
    const days = [];
    const diariesOnMonth = diaries.filter(
        (diary) =>
            diary.created_date.year === year &&
            diary.created_date.month === month
    );
    diariesOnMonth.map((diary) => {
        days.push(parseInt(diary.created_date.date));
    });
    return days;
};

export default function DateCalendarServerRequest() {
    const { user } = useContext(UserContext);

    const requestAbortController = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedDate, setSelectedDate] = useState({
        year: initialValue["$y"].toString(),
        month: (initialValue["$M"] + 1).toString().padStart(2, 0),
        date: initialValue["$D"].toString().padStart(2, 0),
    });
    const [highlightedDays, setHighlightedDays] = useState(
        setBadgeOnMonth(user.diaries, {
            year: selectedDate.year,
            month: selectedDate.month,
        })
    );
    const diaries = getDiariesOnDate(user.diaries, selectedDate);

    const fetchHighlightedDays = ({ year, month }) => {
        setHighlightedDays(setBadgeOnMonth(user.diaries, { year, month }));
        setIsLoading(false);
    };

    useEffect(() => {
        fetchHighlightedDays({
            year: selectedDate.year,
            month: selectedDate.month,
        });
    }, [user.diaries.length]);

    const handleMonthChange = (date) => {
        if (requestAbortController.current) {
            // make sure that you are aborting useless requests
            // because it is possible to switch between months pretty quickly
            requestAbortController.current.abort();
        }

        const year = date["$y"].toString();
        const month = (date["$M"] + 1).toString().padStart(2, 0);

        setIsLoading(true);
        setHighlightedDays([]);
        fetchHighlightedDays({ year, month });
    };

    const handleClickOnDay = (evt) => {
        const dataDate = new Date(
            parseInt(evt.target.getAttribute("data-timestamp"))
        );
        const year = dataDate.getFullYear().toString();
        const month = (dataDate.getMonth() + 1).toString().padStart(2, 0);
        const date = dataDate.getDate().toString().padStart(2, 0);
        setSelectedDate({ year, month, date });
    };

    return (
        <div>
            <header>
                <h1>
                    Calendar <CalendarMonthIcon />
                </h1>{" "}
            </header>{" "}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                    sx={dateCalendarStyles}
                    views={["year", "month", "day"]}
                    defaultValue={initialValue}
                    loading={isLoading}
                    onMonthChange={handleMonthChange}
                    renderLoading={() => <DayCalendarSkeleton />}
                    slots={{
                        day: ServerDay,
                    }}
                    slotProps={{
                        day: {
                            highlightedDays,
                        },
                    }}
                    showDaysOutsideCurrentMonth
                    fixedWeekNumber={6}
                    onClick={handleClickOnDay}
                    style={{
                        width: "100%",
                        height: "360px",
                        maxHeight: "unset",
                    }}
                />{" "}
            </LocalizationProvider>{" "}
            <br />
            <hr />
            <br />{" "}
            {diaries.length ? (
                diaries.map((diary) => (
                    <PopupPage
                        key={diary._id}
                        diary={diary}
                        pageContent={"ShowDiary"}
                        toggleComponent={<DiaryCard diary={diary} />}
                    />
                ))
            ) : (
                <p style={{ color: "grey" }}> NO DIARY </p>
            )}{" "}
        </div>
    );
}
