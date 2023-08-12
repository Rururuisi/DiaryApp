import "../styles/writeForm.css";
import React from "react";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";

import {
  weathers,
  getCurrentDateObj,
  getWeekday_YMD,
} from "../utils/diaryInfoTools";

export default function WriteForm() {
  const [currentDate, setCurrentDate] = React.useState(getCurrentDateObj());

  const dateChange = (evt) => {
    const [year, month, date] = evt.target.value.split("-");
    const weekday = getWeekday_YMD(evt.target.value, "-");
    setCurrentDate((oldDate) => ({
      ...oldDate,
      year,
      month,
      date,
      weekday,
    }));
  };

  const formSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <div>
      <div className="dateTopDisplay">
        {currentDate.weekday}{" "}
        {`${currentDate.month}/${currentDate.date}/${currentDate.year}`}
      </div>
      <form className="WriteForm" onSubmit={formSubmit}>
        <label for="title">title: </label>
        <input type="text" id="title" name="title" />
        <hr />
        <section>
          <div>
            <label for="date">date: </label>
            <input
              type="date"
              id="date"
              name="date"
              value={`${currentDate.year}-${currentDate.month}-${currentDate.date}`}
              onChange={dateChange}
            />
          </div>
          <div>
            <label for="weather">weather: </label>
            <select id="weather" name="weather">
              {weathers.map((weather, idx) => (
                <option key={idx} value={weather.weather}>
                  {weather.symbol}
                </option>
              ))}
            </select>
          </div>
        </section>
        <hr />
        <textarea
          id="content"
          name="content"
          placeholder="Type your content here..."
        />
        <hr />
        <Button
          type="submit"
          variant="contained"
          sx={{
            position: "fixed",
            top: "10px",
            right: "10px",
            "&:hover": {
              backgroundColor: (theme) => theme.palette.ternary.light,
            },
            backgroundColor: (theme) => theme.palette.primary.dark,
            borderRadius: 25,
            minWidth: 0,
          }}
        >
          <CheckIcon />
        </Button>
      </form>
    </div>
  );
}
