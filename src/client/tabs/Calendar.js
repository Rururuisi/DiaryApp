import "../styles/calendar.css";
import React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const dateCalendarStyles = {
  translate: "0px -5px",
  border: "2px solid",
  borderColor: (theme) => theme.palette.primary.main,
  borderRadius: "25px",
  "& .MuiPickersCalendarHeader-root": {
    translate: "0 -10px",
  },
  "& .MuiDayCalendar-header": {
    height: "30px",
    backgroundColor: (theme) => theme.palette.primary.main,
  },
  "& .MuiDayCalendar-weekDayLabel": {
    color: (theme) => theme.palette.ternary.main,
  },
  "& .MuiDateCalendar-viewTransitionContainer": {
    transform: "scale(1.2)",
    translate: "0 10px",
  },
  "& .MuiYearCalendar-root": {
    transform: "scale(0.8)",
    translate: "0 -10px",
  },
  "& .MuiMonthCalendar-root": {
    transform: "scale(0.8)",
  },
  "& .MuiPickersDay-dayOutsideMonth": {
    color: (theme) => theme.palette.primary.dark,
  },
};

export default function Calendar() {
  return (
    <div>
      <header>
        <h1>
          Calendar <CalendarMonthIcon />
        </h1>
      </header>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          sx={dateCalendarStyles}
          views={["year", "month", "day"]}
          showDaysOutsideCurrentMonth
          fixedWeekNumber={6}
          onClick={(evt) => console.log(evt.timeStamp)}
          style={{ width: "100%", height: "400px" }}
        />
      </LocalizationProvider>
      <br />
      <hr />
      <br />
      <p>（下面显示相应日期的日记）</p>
    </div>
  );
}
